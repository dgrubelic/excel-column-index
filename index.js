var columnLetters = {
  'A': 1,   'B': 2,   'C': 3,   'D': 4,   'E': 5,
  'F': 6,   'G': 7,   'H': 8,   'I': 9,   'J': 10,
  'K': 11,  'L': 12,  'M': 13,  'N': 14,  'O': 15,
  'P': 16,  'Q': 17,  'R': 18,  'S': 19,  'T': 20,
  'U': 21,  'V': 22,  'W': 23,  'X': 24,  'Y': 25,
  'Z': 26
};

var firstLetterValue = columnLetters['A'],
    lastLetterValue = columnLetters['Z'];

exports.toNumber = toColumnNumber;
exports.toIndex = toColumnIndex;
exports.toColumnName = toColumnName;

/**
 * Convert column name to number
 * @param  {String} columnName Column name
 * @return {Number}            Column number
 */
function toColumnNumber(columnName) {
  var letters = columnName.split('').reverse();
  var columnIndex = 0;

  if (letters.length === 1) {
    var firstLetter = letters[0];
    if (!columnLetters[firstLetter]) {
      throw new Error('Invalid column letter');
    }

    columnIndex = columnLetters[firstLetter];
  } else {
    for (var i = 0; i < letters.length; i++) {
      var letter = letters[i],
          letterValue = columnLetters[letter];

      if (!columnLetters[letter]) {
        throw new Error('Invalid column letter');
      }

      var currentLetterValue = (letterValue * lastLetterValue * i);
      if (i === 0) {
        currentLetterValue += letterValue;
      }

      columnIndex += currentLetterValue;
    }
  }

  return columnIndex;
}

/**
 * Convert column name to column index (0 based)
 * @param  {String} columnName Column name
 * @return {Number}            Column index
 */
function toColumnIndex(columnName) {
  var columnNumber = toColumnNumber(columnName);
  return --columnNumber;
}

/**
 * Convert column index to name (27 => AA)
 * @param  {Number} columnIndex Column index
 * @return {String}             Column name
 */
function toColumnName(columnIndex) {
  throw new Error('Not implemented');
}