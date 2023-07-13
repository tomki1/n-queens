/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution = [];
  for (var i = 0; i < n; i++) {
    var row = [];
    // i is row number
    // j is column number
    for (var j = 0; j < n; j++) {
      if (i === j) {
        row[j] = 1;
      } else {
        row[j] = 0;
      }
    }
    solution.push(row);
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  //var factorial(num)

  var solutionCount = 1;
  //n! total solutions
  for (var i = 2; i <= n; i++) {
    solutionCount *= i;
  }
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  // var solution = [];
  var piecesUsed = 0;
  var matrix = [];

  // initialize matrix with 0's
  for (var i = 0; i < n; i++) {
    var row = [];
    for (var j = 0; j < n; j++) {
      row.push(0);
    }
    matrix.push(row);
  }
  // solution is a board
  var solution = new Board(matrix);
  // var row = this.rows();

  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      // potentially set square to 1
      solution.attributes[i][j] = 1;
      // if it has conflict, set it back to zero
      if (solution.hasAnyRowConflicts()) {
        solution.attributes[i][j] = 0;
      } else if (solution.hasAnyColConflicts()) {
        solution.attributes[i][j] = 0;
      } else if (solution.hasAnyMajorDiagonalConflicts()) {
        solution.attributes[i][j] = 0;
      } else if (solution.hasAnyMinorDiagonalConflicts()){
        solution.attributes[i][j] = 0;
      } else {
        piecesUsed++;
      }

      // if we used n pieces, return this matrix
      if (piecesUsed === n) {
        return matrix;
      }
    }
  }


  console.log('Single solution for ' + n + ' queens:', JSON.stringify(matrix));
  return matrix;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
