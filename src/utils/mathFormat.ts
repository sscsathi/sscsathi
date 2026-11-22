export type MathSegment =
  | { type: 'text'; value: string }
  | { type: 'fraction'; numerator: MathSegment[]; denominator: MathSegment[]; rawText: string };

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
  let s = str.trim();
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
        // Closed before the end (e.g. "(a + b)(c + d)") -> do NOT strip
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
  // Pure symbol-relation expression like "P * Q / S" or "P + Q / S"
  if (/^[A-Z](?:\s*[+*\/@&#%$=-]\s*[A-Z])+$/.test(trimmed) && /[+*@&#%$]/.test(trimmed)) {
    return true;
  }
  return false;
}

/**
 * Check whether an operand (numerator or denominator) looks genuinely mathematical
 * rather than ordinary English or Hindi prose.
 */
function isValidMathOperand(raw: string): boolean {
  const s = raw.trim();
  if (!s) return false;

  // Reject bare quotes or sentence punctuation
  if (/^["'“”‘’.,;:?!।]+$/.test(s)) return false;

  // Bracketed expression: allow if it contains math symbols/digits/operators or valid math sub-atoms
  const inner = stripOuterGrouping(s);
  const wasBracketed = inner !== s;

  // Check if Devanagari text is present
  const hasDevanagari = /[\u0900-\u097F]/.test(inner);
  if (hasDevanagari) {
    // Allow Hindi math expressions only when they explicitly include math operators/symbols
    // (e.g., "(आधार × लंब)", "(ओम × मीटर²)") or are short single Hindi math nouns paired with a math expression
    if (/[×÷+\-−=²³√π\d]/.test(inner)) return true;
    // Standalone Hindi math noun like "कर्ण" or "मीटर" is checked at pair level
    return /^[\u0900-\u097F]{2,10}$/.test(inner);
  }

  // Pure numeric / radical / superscript / Greek / variable+number term (e.g., "121π", "3√3", "1,50,000", "4r²", "2n", "V²")
  if (
    /^(?:[−-]\s*)?(?:[√∛∜]?\d[\d,]*(?:\.\d+)?[°]?(?:[a-zA-Zπθθαβγδρλμω²³⁴ⁿ₀-₉]*)?|[√∛∜][a-zA-Z\dπθ²³⁴]+)$/.test(
      inner
    )
  ) {
    return true;
  }

  // Trig / log expression (e.g., "sin θ", "cos A", "cosec² θ", "tan 30°", "cot 60°")
  if (
    /^(?:[−-]\s*)?(?:\d+\s*)?(?:cosec|csc|sin|cos|tan|cot|sec|log|ln)[²³⁴]?(?:\s*\([^)]+\)|\s+[a-zA-Zπθθαβγδ\d°²³]+)?$/i.test(
      inner
    )
  ) {
    return true;
  }

  // Single letter variable (with optional Δ prefix, superscript/subscript/prime, e.g., "a", "p", "x²", "A₁", "V'", "Δx", "Δy")
  if (/^(?:[−-]\s*)?Δ?[a-zA-Zπθθαβγδρλμω][⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻ⁿ₀-₉′']*$/.test(inner)) {
    return true;
  }

  // Standard 2-3 letter uppercase math abbreviations (CP, SP, AD, AB, BC, etc.)
  if (MATH_ABBREV_ALLOWLIST.has(inner)) {
    return true;
  }

  // Short algebraic monomial like "xy", "ab", "2ab", "πr²h", "4r²", "sinA"
  if (
    /^(?:[−-]\s*)?(?:\d+(?:\.\d+)?)?[πrRlLhHdDaAbBcCxXyYpPqQnN][⁰¹²³⁴⁵⁶⁷⁸⁹ⁿ₀-₉]*(?:[πrRlLhHdDaAbBcCxXyYpPqQnN][⁰¹²³⁴⁵⁶⁷⁸⁹ⁿ₀-₉]*){1,3}$/.test(
      inner
    ) &&
    !ENGLISH_TWO_LETTER_WORDS.has(inner.toLowerCase())
  ) {
    // Reject ordinary English words of length 3-4 that happen to use those letters (e.g. "had", "all", "and", "can", "day")
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

  // Compound expression inside brackets (e.g., "(p² + 1)", "(√2 + 1)²", "(x² + xy + y²)", "(sin A cos A)", "(a × b)")
  if (wasBracketed || /[()[\]]/.test(s)) {
    // Reject if it contains long non-math prose words (>= 4 letters not in trig/math set)
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
      // Reject prose sentences inside parentheses like "(helpful/advantageous)"
      return false;
    }
    // Must contain at least one math operator, digit, radical, or trig term
    if (/[+\-−×÷*/=²³⁴ⁿ√∛πθ\d]/.test(inner) || /\b(?:sin|cos|tan|cot|sec|cosec)\b/i.test(inner)) {
      return true;
    }
  }

  return false;
}

/**
 * Validate a candidate (numerator, denominator) pair together to eliminate units,
 * prose alternatives, error-spotting markers, and dates.
 */
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

  // Reject error-spotting sentence markers like "(1)/ needed" or "(2)/ were"
  if (/^\([1-4a-d]\)$/i.test(num) && !/^[\d√(]/.test(den)) {
    return false;
  }

  // Reject known prose/abbreviation pairs (w/o, n/a, c/o, etc.)
  const compactPair = `${num.toLowerCase()}/${den.toLowerCase()}`;
  if (PROSE_PAIRS.has(compactPair)) return false;

  // Reject units & rates like km/h, m/s, units/day, इकाई/दिन, s/Q, kg/m³
  const numLower = num.toLowerCase();
  const denLower = den.toLowerCase();
  if (UNIT_NUMERATORS.has(numLower) && UNIT_DENOMINATORS.has(denLower)) {
    return false;
  }
  // Specifically catch single-letter unit pairs like "m/s", "m/min", "s/Q", "L/min", "km/hr"
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

  // Reject if either operand is Devanagari unless at least one Devanagari side itself contains a math operator
  // (allows "(आधार × लंब) / कर्ण" & "(ओम × मीटर²) / मीटर", while rejecting prose like "पलट / 180°")
  const numHasDev = /[\u0900-\u097F]/.test(num);
  const denHasDev = /[\u0900-\u097F]/.test(den);
  if (numHasDev || denHasDev) {
    const devSideHasMathOp =
      (numHasDev && /[×÷+\-−=²³√π]/.test(num)) || (denHasDev && /[×÷+\-−=²³√π]/.test(den));
    if (!devSideHasMathOp) {
      return false;
    }
  }

  // Reject dates like 15/08/1947 or 01/10/2026 (another slash adjacent to a digit immediately before or after)
  if (/^\d{1,4}$/.test(num) && /^\d{1,4}$/.test(den)) {
    if (
      (fracStart > 0 && line[fracStart - 1] === '/') ||
      (fracEnd < line.length && line[fracEnd] === '/')
    ) {
      return false;
    }
  }

  // Reject if we sliced mid-word on the left or right (e.g., "2/3rd", "foo/bar", "10km/h")
  if (fracStart > 0) {
    const prev = line[fracStart - 1];
    if (isAsciiLetter(prev) || isDevanagari(prev)) return false;
  }
  if (fracEnd < line.length) {
    const next = line[fracEnd];
    if (isAsciiLetter(next) || isDevanagari(next)) {
      // Exception: immediate Greek/variable right after closing bracket like "(1/2)CV²" has ')' at fracEnd-1,
      // and "(1/3)πr²h" has ')' before π — here `fracEnd` is BEFORE ')', so next is ')', not a letter!
      return false;
    }
  }

  // Reject standalone uppercase single-letter pairs like "A/B" when NOT in a mathematical context
  // (e.g. avoid "Option A/B" or "Grade A/B", while ALLOWING "A / B = 11 / 10", "R = ρ(l / A)", "a/b")
  if (/^[A-Z]$/.test(num) && /^[A-Z]$/.test(den)) {
    const surrounding = line.slice(Math.max(0, fracStart - 15), Math.min(line.length, fracEnd + 15));
    const hasMathContext = /[=×÷+\-−⇒→:()]|\d/.test(surrounding);
    if (!hasMathContext) return false;
  }

  return isValidMathOperand(num) && isValidMathOperand(den);
}

/**
 * Scan backwards from `endExclusive` (right before optional spaces + `/`) to locate the numerator span.
 */
function extractLeftOperand(line: string, endExclusive: number): { start: number; text: string } | null {
  let end = endExclusive;
  while (end > 0 && line[end - 1] === ' ') end--;
  if (end <= 0) return null;

  let pos = end;

  // Optional trailing superscripts attached to a closing bracket, e.g. "(√2 + 1)²" or "(x + 1)³"
  let trailingSupEnd = pos;
  while (pos > 0 && (SUPERSCRIPTS.includes(line[pos - 1]) || line[pos - 1] === '°')) {
    pos--;
  }

  // Case 1: Bracketed numerator (...) or [...]
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
    // Attach immediate radical prefix like "√(18 - 4)"
    if (start > 0 && RADICALS.includes(line[start - 1])) {
      start--;
    }
    // Attach immediate trig/log function name like "sin(x)" or "cos(θ + 30°)"
    let fnStart = start;
    while (fnStart > 0 && (isAsciiLetter(line[fnStart - 1]) || SUPERSCRIPTS.includes(line[fnStart - 1]))) {
      fnStart--;
    }
    if (fnStart < start && TRIG_WITH_COEFF_RE.test(line.slice(fnStart, start))) {
      start = fnStart;
    }

    return { start, text: line.slice(start, trailingSupEnd) };
  }

  // Reset pos for Case 2: Simple math atom
  pos = end;
  let i = pos;
  while (i > 0) {
    const ch = line[i - 1];
    if (isMathAtomChar(ch) || isDevanagari(ch)) {
      i--;
    } else if ((ch === ',' || ch === '.') && i - 2 >= 0 && isDigit(line[i - 2]) && i < pos && isDigit(line[i])) {
      // Allow commas/decimals strictly inside numbers (e.g. "1,50,000" or "3.14")
      i--;
    } else {
      break;
    }
  }

  if (i === pos) return null;
  let start = i;

  // Check if preceded by a trig function + space (e.g., "sec θ", "sin A", "cosec² θ", "tan 30°")
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

/**
 * Scan forwards from `startInclusive` (right after `/` + optional spaces) to locate the denominator span.
 */
function extractRightOperand(line: string, startInclusive: number): { end: number; text: string } | null {
  let start = startInclusive;
  while (start < line.length && line[start] === ' ') start++;
  if (start >= line.length) return null;

  let pos = start;

  // Optional radical prefix before bracket: "√(18 - 4)"
  let hasRadicalBeforeBracket = false;
  if (RADICALS.includes(line[pos]) && pos + 1 < line.length && (line[pos + 1] === '(' || line[pos + 1] === '[')) {
    hasRadicalBeforeBracket = true;
    pos++;
  }

  // Case 1: Bracketed denominator (...) or [...]
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
    // Include trailing superscripts attached to the closing bracket, e.g. "(√2)²"
    while (end < line.length && SUPERSCRIPTS.includes(line[end])) {
      end++;
    }
    return {
      end,
      text: line.slice(hasRadicalBeforeBracket ? start : pos, end),
    };
  }

  // Case 2: Simple math atom (possibly trig function + argument, e.g. "sin θ" or "cos(θ + 30°)")
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

  // If the denominator starts with a trig/log function (e.g., "sin", "cos", "tan", "cosec²"),
  // also absorb its angle/argument: "sin θ", "tan 30°", "cos(θ + 30°)"
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

/**
 * Recursively parse a single line (no newlines) using minimum-depth-first divide-and-conquer
 * so outer fractions like `(4/3 + 4) / (4/3 − 4)` or `1 / (x - 1/x)` are captured before inner ones.
 */
function parseLine(line: string, nestingDepth: number, safetyBudget = 40): MathSegment[] {
  if (
    !line ||
    !line.includes('/') ||
    nestingDepth > 3 ||
    safetyBudget <= 0 ||
    isCodedRelationLine(line)
  ) {
    return line ? [{ type: 'text', value: line }] : [];
  }

  // Compute bracket depth for every `/` and collect valid candidates
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

    // Skip URLs ("http://", "//") and Indian currency ("400/-")
    if (
      (i > 0 && (line[i - 1] === ':' || line[i - 1] === '/')) ||
      (i + 1 < line.length && (line[i + 1] === '/' || line[i + 1] === '-' || line[i + 1] === '−'))
    ) {
      continue;
    }

    // Optimization: if we already found a candidate at a shallower depth, only accept strictly shallower depths
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

    // Depth 0 is the shallowest possible — pick the leftmost valid depth-0 fraction immediately
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
    segments.push(...parseLine(prefix, nestingDepth, safetyBudget - 1));
  }
  segments.push({
    type: 'fraction',
    numerator: parseLine(cleanNum, nestingDepth + 1, safetyBudget - 1),
    denominator: parseLine(cleanDen, nestingDepth + 1, safetyBudget - 1),
    rawText: `${cleanNum} / ${cleanDen}`,
  });
  if (suffix) {
    segments.push(...parseLine(suffix, nestingDepth, safetyBudget - 1));
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

/**
 * Parse arbitrary English/Hindi question, option, or explanation text into
 * plain text and recursive vertical-stacked fraction segments.
 */
export function parseMathText(input: string): MathSegment[] {
  if (!input) return [];
  if (!input.includes('/')) {
    return [{ type: 'text', value: input }];
  }

  const lines = input.split('\n');
  const result: MathSegment[] = [];

  for (let idx = 0; idx < lines.length; idx++) {
    if (idx > 0) {
      result.push({ type: 'text', value: '\n' });
    }
    const parsed = parseLine(lines[idx], 0);
    result.push(...parsed);
  }

  return mergeAdjacentText(result);
}

/**
 * Helper to check whether a parsed segment array contains any stacked fractions.
 */
export function hasMathFractions(segments: MathSegment[]): boolean {
  return segments.some((seg) => seg.type === 'fraction');
}
