export type MathSegment =
  | { type: 'text'; value: string }
  | { type: 'fraction'; numerator: MathSegment[]; denominator: MathSegment[]; rawText: string }
  | { type: 'delimited'; open: '(' | '['; close: ')' | ']'; content: MathSegment[] }
  | { type: 'sqrt'; content: MathSegment[]; isTall: boolean; rawText: string };

const SUPERSCRIPTS = '⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻ⁿ';
const SUBSCRIPTS = '₀₁₂₃₄₅₆₇₈₉';
const GREEK_MATH = 'πθθαβγδρλμωϕφΔ';
const RADICALS = '√∛∜';

const TRIG_FN_RE = /^(?:cosec|csc|sin|cos|tan|cot|sec|log|ln)[²³⁴]?$/i;
const TRIG_WITH_COEFF_RE = /^(?:\d+(?:\.\d+)?)?(?:cosec|csc|sin|cos|tan|cot|sec|log|ln)[²³⁴]?$/i;

// Standard 2-4 letter uppercase math / geometry / quant abbreviations allowed as standalone fraction operands
const MATH_ABBREV_ALLOWLIST = new Set([
  'CP',
  'SP',
  'MP',
  'SI',
  'CI',
  'AB',
  'BC',
  'CD',
  'DA',
  'AD',
  'AE',
  'DE',
  'AC',
  'BD',
  'BE',
  'CF',
  'PQ',
  'QR',
  'PR',
  'OP',
  'OQ',
  'OT',
  'PG',
  'GD',
  'GM',
  'ZM',
  'AO',
  'BO',
  'CO',
  'DO',
  'OA',
  'OB',
  'OC',
  'OD',
  'TSA',
  'CSA',
  'LSA',
  'LCM',
  'HCF',
  'DCT',
  'TCT',
  'LHS',
  'RHS',
]);

// Units & rates where `/` means "per" and must stay inline (e.g. km/h, m/s, units/day)
const UNIT_NUMERATORS = new Set([
  'km',
  'm',
  'cm',
  'mm',
  'mi',
  'ft',
  'kg',
  'g',
  'mg',
  'l',
  'ml',
  'rs',
  'rs.',
  '₹',
  '$',
  'unit',
  'units',
  's',
  'sec',
  'min',
  'hr',
  'hrs',
  'h',
  'word',
  'words',
  'page',
  'pages',
  'litre',
  'litres',
  'liter',
  'liters',
  'rupee',
  'rupees',
  'इकाई',
  'किमी',
  'मी',
  'सेमी',
  'रु',
]);

const UNIT_DENOMINATORS = new Set([
  'h',
  'hr',
  'hrs',
  'hour',
  'hours',
  's',
  'sec',
  'secs',
  'second',
  'seconds',
  'min',
  'mins',
  'minute',
  'minutes',
  'day',
  'days',
  'week',
  'weeks',
  'month',
  'months',
  'year',
  'years',
  'yr',
  'yrs',
  'km',
  'm',
  'm²',
  'm³',
  'cm',
  'cm²',
  'cm³',
  'kg',
  'g',
  'l',
  'litre',
  'litres',
  'liter',
  'liters',
  'q',
  'qs',
  'question',
  'person',
  'head',
  'unit',
  'units',
  'दिन',
  'घंटा',
  'घंटे',
  'से',
  'सेकंड',
  'मिनट',
  'मी',
  'सेमी',
]);

// Common non-math slash pairs (abbreviations / prose)
const PROSE_PAIRS = new Set([
  'w/o',
  'c/o',
  'n/a',
  'a/c',
  'p/l',
  'b/w',
  'i/o',
  's/o',
  'd/o',
  'r/w',
  'u/s',
  'e/rtl',
]);

// Common 2-letter English words that should never be treated as algebraic variables in prose
const ENGLISH_TWO_LETTER_WORDS = new Set([
  'am',
  'an',
  'as',
  'at',
  'be',
  'by',
  'do',
  'go',
  'he',
  'if',
  'in',
  'is',
  'it',
  'me',
  'my',
  'no',
  'of',
  'on',
  'or',
  'so',
  'to',
  'up',
  'us',
  'we',
]);

function isAsciiLetter(ch: string): boolean {
  return (ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z');
}

function isDigit(ch: string): boolean {
  return ch >= '0' && ch <= '9';
}

function isDevanagari(ch: string): boolean {
  const code = ch.charCodeAt(0);
  // Exclude Devanagari punctuation danda (0x0964 '।') and double danda (0x0965 '॥')
  return (code >= 0x0900 && code <= 0x0963) || (code >= 0x0966 && code <= 0x097f);
}

function isMathAtomChar(ch: string): boolean {
  return (
    isDigit(ch) ||
    isAsciiLetter(ch) ||
    SUPERSCRIPTS.includes(ch) ||
    SUBSCRIPTS.includes(ch) ||
    GREEK_MATH.includes(ch) ||
    RADICALS.includes(ch) ||
    ch === '°' ||
    ch === '′' ||
    ch === "'"
  );
}

function isMatchingBracketPair(open: string, close: string): boolean {
  return (open === '(' && close === ')') || (open === '[' && close === ']');
}

/**
 * Strip a single outermost pair of matching (...) or [...] ONLY if the opening
 * bracket at index 0 matches the closing bracket at index str.length - 1.
 */
function stripOuterGrouping(str: string): string {
  const s = str.trim();
  if (s.length < 2) return s;
  const open = s[0];
  const close = s[s.length - 1];
  if (!isMatchingBracketPair(open, close)) return s;

  let depth = 0;
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (ch === '(' || ch === '[') depth++;
    else if (ch === ')' || ch === ']') {
      depth--;
      if (depth === 0 && i < s.length - 1) {
        return s;
      }
    }
  }
  return depth === 0 ? s.slice(1, -1).trim() : s;
}

/**
 * Detect coded blood-relation / symbol-operator lines where `/` is a symbolic operator
 * (e.g. `3. A / B means "A is the mother of B"` or `P * Q / S`).
 */
function isCodedRelationLine(line: string): boolean {
  if (
    /\b[A-Z]\s*\/\s*[A-Z]\s*(?:means|denotes|indicates|represents|stands\s+for|का\s+मतलब|का\s+अर्थ|,)/i.test(
      line
    )
  ) {
    return true;
  }
  const trimmed = line.trim();
  if (/^[A-Z](?:\s*[+*\/@&#%$=-]\s*[A-Z])+$/.test(trimmed) && /[+*@&#%$]/.test(trimmed)) {
    return true;
  }
  return false;
}

function isValidMathOperand(raw: string): boolean {
  const s = raw.trim();
  if (!s) return false;

  if (/^["'“”‘’.,;:?!।]+$/.test(s)) return false;

  const inner = stripOuterGrouping(s);
  const wasBracketed = inner !== s;

  const hasDevanagari = /[\u0900-\u097F]/.test(inner);
  if (hasDevanagari) {
    if (/[×÷+\-−=²³√π\d]/.test(inner)) return true;
    return /^[\u0900-\u097F]{2,10}$/.test(inner);
  }

  if (
    /^(?:[−-]\s*)?(?:[√∛∜]?\d[\d,]*(?:\.\d+)?[°]?(?:[a-zA-Zπθθαβγδρλμω²³⁴ⁿ₀-₉]*)?|[√∛∜][a-zA-Z\dπθ²³⁴]+)$/.test(
      inner
    )
  ) {
    return true;
  }

  if (
    /^(?:[−-]\s*)?(?:\d+\s*)?(?:cosec|csc|sin|cos|tan|cot|sec|log|ln)[²³⁴]?(?:\s*\([^)]+\)|\s+[a-zA-Zπθθαβγδ\d°²³]+)?$/i.test(
      inner
    )
  ) {
    return true;
  }

  // Single letter variable (with optional Δ prefix, superscript/subscript/prime)
  if (/^(?:[−-]\s*)?Δ?[a-zA-Zπθθαβγδρλμω][⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻ⁿ₀-₉′']*$/.test(inner)) {
    return true;
  }

  if (MATH_ABBREV_ALLOWLIST.has(inner)) {
    return true;
  }

  if (
    /^(?:[−-]\s*)?(?:\d+(?:\.\d+)?)?[πrRlLhHdDaAbBcCxXyYpPqQnN][⁰¹²³⁴⁵⁶⁷⁸⁹ⁿ₀-₉]*(?:[πrRlLhHdDaAbBcCxXyYpPqQnN][⁰¹²³⁴⁵⁶⁷⁸⁹ⁿ₀-₉]*){1,3}$/.test(
      inner
    ) &&
    !ENGLISH_TWO_LETTER_WORDS.has(inner.toLowerCase())
  ) {
    const commonWords = new Set([
      'had',
      'all',
      'and',
      'can',
      'day',
      'bad',
      'add',
      'ran',
      'pan',
      'ban',
      'cap',
      'car',
      'bar',
      'par',
      'lap',
      'nap',
      'pad',
      'lad',
      'dad',
      'cab',
      'lab',
      'dab',
      'pay',
      'ray',
      'lay',
      'bay',
      'hay',
      'cry',
      'dry',
      'pry',
      'any',
      'arc',
      'arm',
      'ball',
      'call',
      'hall',
      'land',
      'hand',
      'band',
      'card',
      'hard',
      'yard',
      'plan',
      'play',
      'clay',
      'pray',
      'crab',
      'clap',
      'brad',
      'glad',
      'drab',
      'barn',
      'darn',
      'yarn',
      'carp',
      'harp',
      'park',
      'dark',
      'bark',
      'lark',
      'mark',
      'bank',
      'rank',
      'dank',
      'hank',
      'lank',
      'yank',
      'calm',
      'palm',
      'balm',
      'half',
      'calf',
      'camp',
      'damp',
      'lamp',
      'ramp',
    ]);
    if (!commonWords.has(inner.toLowerCase())) {
      return true;
    }
  }

  if (wasBracketed || /[()[\]]/.test(s)) {
    const words = inner.match(/[a-zA-Z]{2,}/g) ?? [];
    for (const w of words) {
      const lower = w.toLowerCase();
      if (
        TRIG_FN_RE.test(lower) ||
        MATH_ABBREV_ALLOWLIST.has(w) ||
        lower === 'xy' ||
        lower === 'ab' ||
        lower === 'bc' ||
        lower === 'ca' ||
        lower === 'pq' ||
        lower === 'qr' ||
        lower === 'pr'
      ) {
        continue;
      }
      return false;
    }
    if (/[+\-−×÷*/=²³⁴ⁿ√∛πθ\d]/.test(inner) || /\b(?:sin|cos|tan|cot|sec|cosec)\b/i.test(inner)) {
      return true;
    }
  }

  return false;
}

function isValidFractionPair(
  numRaw: string,
  denRaw: string,
  line: string,
  fracStart: number,
  fracEnd: number
): boolean {
  const num = numRaw.trim();
  const den = denRaw.trim();
  if (!num || !den) return false;

  if (/^\([1-4a-d]\)$/i.test(num) && !/^[\d√(]/.test(den)) {
    return false;
  }

  const compactPair = `${num.toLowerCase()}/${den.toLowerCase()}`;
  if (PROSE_PAIRS.has(compactPair)) return false;

  const numLower = num.toLowerCase();
  const denLower = den.toLowerCase();
  if (UNIT_NUMERATORS.has(numLower) && UNIT_DENOMINATORS.has(denLower)) {
    return false;
  }
  if (
    (numLower === 'm' && /^(?:s|sec|min|hr|h)$/.test(denLower)) ||
    (numLower === 's' && denLower === 'q') ||
    (numLower === 'l' && /^(?:min|hr|h|s|day)$/.test(denLower))
  ) {
    return false;
  }

  // Reject ordinal suffixes like "2/3rd", "1/4th", "1/2nd"
  if (/^\d+(?:st|nd|rd|th)$/i.test(den)) {
    return false;
  }

  // Reject Devanagari prose unless at least one Devanagari side contains an explicit math operator
  const numHasDev = /[\u0900-\u097F]/.test(num);
  const denHasDev = /[\u0900-\u097F]/.test(den);
  if (numHasDev || denHasDev) {
    const devSideHasMathOp =
      (numHasDev && /[×÷+\-−=²³√π]/.test(num)) || (denHasDev && /[×÷+\-−=²³√π]/.test(den));
    if (!devSideHasMathOp) {
      return false;
    }
  }

  // Reject dates like 15/08/1947
  if (/^\d{1,4}$/.test(num) && /^\d{1,4}$/.test(den)) {
    if (
      (fracStart > 0 && line[fracStart - 1] === '/') ||
      (fracEnd < line.length && line[fracEnd] === '/')
    ) {
      return false;
    }
  }

  // Word-boundary checks
  if (fracStart > 0) {
    const prev = line[fracStart - 1];
    if (isAsciiLetter(prev) || isDevanagari(prev)) return false;
  }
  if (fracEnd < line.length) {
    const next = line[fracEnd];
    if (isAsciiLetter(next) || isDevanagari(next)) {
      return false;
    }
  }

  if (/^[A-Z]$/.test(num) && /^[A-Z]$/.test(den)) {
    const surrounding = line.slice(Math.max(0, fracStart - 15), Math.min(line.length, fracEnd + 15));
    const hasMathContext = /[=×÷+\-−⇒→:()]|\d/.test(surrounding);
    if (!hasMathContext) return false;
  }

  return isValidMathOperand(num) && isValidMathOperand(den);
}

function extractLeftOperand(line: string, endExclusive: number): { start: number; text: string } | null {
  let end = endExclusive;
  while (end > 0 && line[end - 1] === ' ') end--;
  if (end <= 0) return null;

  let pos = end;
  const trailingSupEnd = pos;
  while (pos > 0 && (SUPERSCRIPTS.includes(line[pos - 1]) || line[pos - 1] === '°')) {
    pos--;
  }

  if (pos > 0 && (line[pos - 1] === ')' || line[pos - 1] === ']')) {
    const closeBracket = line[pos - 1];
    const openBracket = closeBracket === ')' ? '(' : '[';
    let depth = 0;
    let i = pos - 1;
    for (; i >= 0; i--) {
      if (line[i] === closeBracket) depth++;
      else if (line[i] === openBracket) {
        depth--;
        if (depth === 0) break;
      }
    }
    if (depth !== 0) return null;

    let start = i;
    if (start > 0 && RADICALS.includes(line[start - 1])) {
      start--;
    }
    let fnStart = start;
    while (fnStart > 0 && (isAsciiLetter(line[fnStart - 1]) || SUPERSCRIPTS.includes(line[fnStart - 1]))) {
      fnStart--;
    }
    if (fnStart < start && TRIG_WITH_COEFF_RE.test(line.slice(fnStart, start))) {
      start = fnStart;
    }

    return { start, text: line.slice(start, trailingSupEnd) };
  }

  pos = end;
  let i = pos;
  while (i > 0) {
    const ch = line[i - 1];
    if (isMathAtomChar(ch) || isDevanagari(ch)) {
      i--;
    } else if ((ch === ',' || ch === '.') && i - 2 >= 0 && isDigit(line[i - 2]) && i < pos && isDigit(line[i])) {
      i--;
    } else {
      break;
    }
  }

  if (i === pos) return null;
  let start = i;

  let spaceIdx = start;
  while (spaceIdx > 0 && line[spaceIdx - 1] === ' ') spaceIdx--;
  if (spaceIdx < start) {
    let fnStart = spaceIdx;
    while (
      fnStart > 0 &&
      (isAsciiLetter(line[fnStart - 1]) || SUPERSCRIPTS.includes(line[fnStart - 1]))
    ) {
      fnStart--;
    }
    const maybeFn = line.slice(fnStart, spaceIdx);
    if (TRIG_FN_RE.test(maybeFn)) {
      start = fnStart;
    }
  }

  return { start, text: line.slice(start, pos) };
}

function extractRightOperand(line: string, startInclusive: number): { end: number; text: string } | null {
  let start = startInclusive;
  while (start < line.length && line[start] === ' ') start++;
  if (start >= line.length) return null;

  let pos = start;
  let hasRadicalBeforeBracket = false;
  if (RADICALS.includes(line[pos]) && pos + 1 < line.length && (line[pos + 1] === '(' || line[pos + 1] === '[')) {
    hasRadicalBeforeBracket = true;
    pos++;
  }

  if (line[pos] === '(' || line[pos] === '[') {
    const openBracket = line[pos];
    const closeBracket = openBracket === '(' ? ')' : ']';
    let depth = 0;
    let i = pos;
    for (; i < line.length; i++) {
      if (line[i] === openBracket) depth++;
      else if (line[i] === closeBracket) {
        depth--;
        if (depth === 0) break;
      }
    }
    if (depth !== 0) return null;

    let end = i + 1;
    while (end < line.length && SUPERSCRIPTS.includes(line[end])) {
      end++;
    }
    return {
      end,
      text: line.slice(hasRadicalBeforeBracket ? start : pos, end),
    };
  }

  let i = start;
  while (i < line.length) {
    const ch = line[i];
    if (isMathAtomChar(ch) || isDevanagari(ch)) {
      i++;
    } else if (
      (ch === ',' || ch === '.') &&
      i > start &&
      isDigit(line[i - 1]) &&
      i + 1 < line.length &&
      isDigit(line[i + 1])
    ) {
      i++;
    } else {
      break;
    }
  }

  if (i === start) return null;
  let end = i;
  const firstToken = line.slice(start, end);

  if (TRIG_FN_RE.test(firstToken)) {
    if (end < line.length && line[end] === '(') {
      let depth = 0;
      let j = end;
      for (; j < line.length; j++) {
        if (line[j] === '(') depth++;
        else if (line[j] === ')') {
          depth--;
          if (depth === 0) {
            end = j + 1;
            break;
          }
        }
      }
    } else {
      let argStart = end;
      while (argStart < line.length && line[argStart] === ' ') argStart++;
      if (argStart > end && argStart < line.length) {
        let argEnd = argStart;
        while (argEnd < line.length && isMathAtomChar(line[argEnd])) argEnd++;
        const arg = line.slice(argStart, argEnd);
        if (/^(?:\d+°?|[a-zA-Zπθθαβγδ][⁰¹²³⁴⁵⁶⁷⁸⁹₀-₉]*)$/.test(arg)) {
          end = argEnd;
        }
      }
    }
  }

  return { end, text: line.slice(start, end) };
}

interface CandidateFraction {
  slashIndex: number;
  depth: number;
  start: number;
  end: number;
  numRaw: string;
  denRaw: string;
}

function parseLineFractions(line: string, nestingDepth: number, safetyBudget = 40): MathSegment[] {
  if (
    !line ||
    !line.includes('/') ||
    nestingDepth > 3 ||
    safetyBudget <= 0 ||
    isCodedRelationLine(line)
  ) {
    return line ? [{ type: 'text', value: line }] : [];
  }

  let depth = 0;
  let bestCandidate: CandidateFraction | null = null;

  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '(' || ch === '[') {
      depth++;
      continue;
    }
    if (ch === ')' || ch === ']') {
      depth = Math.max(0, depth - 1);
      continue;
    }
    if (ch !== '/') continue;

    if (
      (i > 0 && (line[i - 1] === ':' || line[i - 1] === '/')) ||
      (i + 1 < line.length && (line[i + 1] === '/' || line[i + 1] === '-' || line[i + 1] === '−'))
    ) {
      continue;
    }

    if (bestCandidate && depth >= bestCandidate.depth) {
      continue;
    }

    const left = extractLeftOperand(line, i);
    const right = extractRightOperand(line, i + 1);
    if (!left || !right) continue;

    if (!isValidFractionPair(left.text, right.text, line, left.start, right.end)) {
      continue;
    }

    bestCandidate = {
      slashIndex: i,
      depth,
      start: left.start,
      end: right.end,
      numRaw: left.text,
      denRaw: right.text,
    };

    if (depth === 0) break;
  }

  if (!bestCandidate) {
    return [{ type: 'text', value: line }];
  }

  const prefix = line.slice(0, bestCandidate.start);
  const suffix = line.slice(bestCandidate.end);

  const cleanNum = stripOuterGrouping(bestCandidate.numRaw);
  const cleanDen = stripOuterGrouping(bestCandidate.denRaw);

  const segments: MathSegment[] = [];
  if (prefix) {
    segments.push(...parseLineFractions(prefix, nestingDepth, safetyBudget - 1));
  }
  segments.push({
    type: 'fraction',
    numerator: parseLineFractions(cleanNum, nestingDepth + 1, safetyBudget - 1),
    denominator: parseLineFractions(cleanDen, nestingDepth + 1, safetyBudget - 1),
    rawText: `${cleanNum} / ${cleanDen}`,
  });
  if (suffix) {
    segments.push(...parseLineFractions(suffix, nestingDepth, safetyBudget - 1));
  }

  return mergeAdjacentText(segments);
}

function mergeAdjacentText(segments: MathSegment[]): MathSegment[] {
  const merged: MathSegment[] = [];
  for (const seg of segments) {
    const prev = merged[merged.length - 1];
    if (seg.type === 'text' && prev && prev.type === 'text') {
      prev.value += seg.value;
    } else {
      merged.push(seg);
    }
  }
  return merged;
}

function containsTallNode(segments: MathSegment[]): boolean {
  for (const seg of segments) {
    if (seg.type === 'fraction') return true;
    if (seg.type === 'delimited' && containsTallNode(seg.content)) return true;
    if (seg.type === 'sqrt' && seg.isTall) return true;
  }
  return false;
}

/**
 * Pass 2: Parse inline square roots inside plain text segments:
 * - `√(...)` or `√[...]` (e.g., `√(18 - 4)`, `√(d² - 64)`, `√[(5 - 2)² + (7 - 3)²]`)
 * - Simple radicands `√2`, `√0.16`, `√14`, `√n`, `√x²`
 */
function parseInlineSqrtsInText(text: string): MathSegment[] {
  if (!text.includes('√')) {
    return text ? [{ type: 'text', value: text }] : [];
  }

  const out: MathSegment[] = [];
  let cursor = 0;

  while (cursor < text.length) {
    const idx = text.indexOf('√', cursor);
    if (idx === -1) {
      out.push({ type: 'text', value: text.slice(cursor) });
      break;
    }

    if (idx > cursor) {
      out.push({ type: 'text', value: text.slice(cursor, idx) });
    }

    const after = idx + 1;
    if (after >= text.length) {
      out.push({ type: 'text', value: '√' });
      break;
    }

    // Case A: Bracketed radicand √(...) or √[...]
    if (text[after] === '(' || text[after] === '[') {
      const open = text[after];
      const close = open === '(' ? ')' : ']';
      let depth = 0;
      let j = after;
      for (; j < text.length; j++) {
        if (text[j] === open) depth++;
        else if (text[j] === close) {
          depth--;
          if (depth === 0) break;
        }
      }
      if (depth === 0) {
        const inner = text.slice(after + 1, j).trim();
        out.push({
          type: 'sqrt',
          content: parseInlineSqrtsInText(inner),
          isTall: false,
          rawText: `√(${inner})`,
        });
        cursor = j + 1;
        continue;
      }
    }

    // Case B: Simple radicand (number with optional decimals/commas OR single variable with superscripts/subscripts)
    let j = after;
    if (isDigit(text[j])) {
      while (j < text.length) {
        const ch = text[j];
        if (isDigit(ch) || SUPERSCRIPTS.includes(ch)) {
          j++;
        } else if (
          (ch === '.' || ch === ',') &&
          j + 1 < text.length &&
          isDigit(text[j + 1])
        ) {
          j++;
        } else {
          break;
        }
      }
      // Attach trailing variable/pi if immediately touching, e.g. √2x
      while (j < text.length && (GREEK_MATH.includes(text[j]) || SUPERSCRIPTS.includes(text[j]))) {
        j++;
      }
    } else if (isAsciiLetter(text[j]) || GREEK_MATH.includes(text[j])) {
      j++;
      while (
        j < text.length &&
        (SUPERSCRIPTS.includes(text[j]) || SUBSCRIPTS.includes(text[j]) || isDigit(text[j]))
      ) {
        j++;
      }
    }

    if (j > after) {
      const radicand = text.slice(after, j);
      out.push({
        type: 'sqrt',
        content: [{ type: 'text', value: radicand }],
        isTall: false,
        rawText: `√${radicand}`,
      });
      cursor = j;
    } else {
      out.push({ type: 'text', value: '√' });
      cursor = after;
    }
  }

  return mergeAdjacentText(out);
}

/**
 * Pass 1: Detect matching `(...)`, `[...]`, `√(...)`, and `√[...]` spanning across
 * one or more stacked `fraction` segments and upgrade them into auto-scaling
 * `delimited` or tall `sqrt` AST nodes.
 */
function upgradeTallDelimiters(segments: MathSegment[]): MathSegment[] {
  // First recursively decorate numerator & denominator of every fraction
  const recursed = segments.map((seg): MathSegment => {
    if (seg.type === 'fraction') {
      return {
        ...seg,
        numerator: decorateMathSegments(seg.numerator),
        denominator: decorateMathSegments(seg.denominator),
      };
    }
    return seg;
  });

  // Tokenize text segments into atomic chars around brackets/√ so we can match spans cleanly
  type FlatToken =
    | { kind: 'char'; ch: string }
    | { kind: 'node'; node: MathSegment };

  const tokens: FlatToken[] = [];
  for (const seg of recursed) {
    if (seg.type === 'text') {
      for (const ch of seg.value) {
        tokens.push({ kind: 'char', ch });
      }
    } else {
      tokens.push({ kind: 'node', node: seg });
    }
  }

  // Find matching bracket pairs in token array
  const stack: { index: number; ch: '(' | '[' }[] = [];
  const pairs: { openIdx: number; closeIdx: number; open: '(' | '['; close: ')' | ']' }[] = [];

  for (let i = 0; i < tokens.length; i++) {
    const tok = tokens[i];
    if (tok.kind !== 'char') continue;
    if (tok.ch === '(' || tok.ch === '[') {
      stack.push({ index: i, ch: tok.ch });
    } else if (tok.ch === ')' || tok.ch === ']') {
      // Find nearest matching opener
      for (let s = stack.length - 1; s >= 0; s--) {
        if (isMatchingBracketPair(stack[s].ch, tok.ch)) {
          pairs.push({
            openIdx: stack[s].index,
            closeIdx: i,
            open: stack[s].ch,
            close: tok.ch,
          });
          stack.splice(s);
          break;
        }
      }
    }
  }

  // Keep only pairs whose interior contains at least one tall node (fraction)
  const tallPairs = pairs.filter((p) => {
    for (let i = p.openIdx + 1; i < p.closeIdx; i++) {
      const tok = tokens[i];
      if (tok.kind === 'node' && containsTallNode([tok.node])) {
        return true;
      }
    }
    return false;
  });

  if (tallPairs.length === 0) {
    return recursed;
  }

  // Index tall pairs by their openIdx for clean recursive reconstruction
  const pairByOpen = new Map<number, (typeof tallPairs)[number]>();
  for (const p of tallPairs) {
    pairByOpen.set(p.openIdx, p);
  }

  function buildRange(from: number, to: number): MathSegment[] {
    const out: MathSegment[] = [];
    let i = from;
    while (i < to) {
      // Check for √ immediately preceding a tall bracket pair (e.g., √(d² / 4r²))
      const cur = tokens[i];
      if (cur.kind === 'char' && cur.ch === '√' && i + 1 < to && pairByOpen.has(i + 1)) {
        const pair = pairByOpen.get(i + 1)!;
        if (pair.closeIdx < to) {
          const innerSegs = buildRange(pair.openIdx + 1, pair.closeIdx);
          out.push({
            type: 'sqrt',
            content: innerSegs,
            isTall: true,
            rawText: '√(fraction)',
          });
          i = pair.closeIdx + 1;
          continue;
        }
      }

      if (pairByOpen.has(i)) {
        const pair = pairByOpen.get(i)!;
        if (pair.closeIdx < to) {
          const innerSegs = buildRange(pair.openIdx + 1, pair.closeIdx);
          out.push({
            type: 'delimited',
            open: pair.open,
            close: pair.close,
            content: innerSegs,
          });
          i = pair.closeIdx + 1;
          continue;
        }
      }

      if (cur.kind === 'char') {
        out.push({ type: 'text', value: cur.ch });
      } else {
        out.push(cur.node);
      }
      i++;
    }
    return mergeAdjacentText(out);
  }

  return buildRange(0, tokens.length);
}

function applyInlineSqrts(segments: MathSegment[]): MathSegment[] {
  const out: MathSegment[] = [];
  for (const seg of segments) {
    if (seg.type === 'text') {
      out.push(...parseInlineSqrtsInText(seg.value));
    } else if (seg.type === 'delimited') {
      out.push({
        ...seg,
        content: applyInlineSqrts(seg.content),
      });
    } else if (seg.type === 'sqrt') {
      out.push({
        ...seg,
        content: applyInlineSqrts(seg.content),
      });
    } else {
      // fraction numerator/denominator already decorated
      out.push(seg);
    }
  }
  return mergeAdjacentText(out);
}

function decorateMathSegments(segments: MathSegment[]): MathSegment[] {
  const withDelimiters = upgradeTallDelimiters(segments);
  return applyInlineSqrts(withDelimiters);
}

/**
 * Parse arbitrary English/Hindi question, option, or explanation text into
 * plain text, vertical stacked fractions, vertically auto-scaling parentheses/brackets,
 * and crisp auto-scaling square root radicals.
 */
export function parseMathText(input: string): MathSegment[] {
  if (!input) return [];
  if (!input.includes('/') && !input.includes('√')) {
    return [{ type: 'text', value: input }];
  }

  const lines = input.split('\n');
  const result: MathSegment[] = [];

  for (let idx = 0; idx < lines.length; idx++) {
    if (idx > 0) {
      result.push({ type: 'text', value: '\n' });
    }
    const rawLineSegs = parseLineFractions(lines[idx], 0);
    const decorated = decorateMathSegments(rawLineSegs);
    result.push(...decorated);
  }

  return mergeAdjacentText(result);
}

export function hasMathFractions(segments: MathSegment[]): boolean {
  return segments.some((seg) => seg.type === 'fraction');
}
