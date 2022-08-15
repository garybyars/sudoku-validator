let puzzle = [
    [8, 9, 5, 7, 4, 2, 1, 3, 6],
    [2, 7, 1, 9, 6, 3, 4, 8, 5],
    [4, 6, 3, 5, 8, 1, 7, 9, 2],
  
    [9, 3, 4, 6, 1, 7, 2, 5, 8],
    [5, 1, 7, 2, 3, 8, 9, 6, 4],
    [6, 8, 2, 4, 5, 9, 3, 7, 1],
  
    [1, 5, 9, 8, 7, 4, 6, 2, 3],
    [7, 4, 6, 3, 2, 5, 8, 1, 9],
    [3, 2, 8, 1, 9, 6, 5, 4, 7]];
  
  //Step 1: getRow WORKS! (but needs to be a single array)
  
  const getRow = (puzzle, rowIndex) => {
    const row = [];
    for (let i = 0; i < puzzle.length; i++) {
      if (i === rowIndex) row.push(puzzle[i]);
    }
    return row
  };
  
  console.log(getRow(puzzle, 1));
  
  //Step 2: getColumn WORKS!!!
  
  const getColumn = (puzzle, columnIndex) => {
    const column = [];
    for (let i = 0; i < puzzle.length; i++) {
      const row = puzzle[i];
      for (let j = 0; j < row.length; j++) {
        if (j === columnIndex) column.push(row[j]);
      }
    }
    return column;
  };
  
  console.log(getColumn(puzzle, 8));
  
  //Step 3: getSection WORKS!
  
  const getSection = (puzzle, rowIndex, columnIndex) => {
    const section = [];
    let coord1 = rowIndex *= 3;
    let coord2 = columnIndex *= 3;
    for (let i = coord1; i < puzzle.length; i++) {
  
      for (let j = 0; j < puzzle[i].length; j++) {
        if (j === coord2 && i === coord1)
          section.push(puzzle[i][j]);
        if (j === (coord2 + 1) && i === (coord1))
          section.push(puzzle[i][j]);
        if (j === (coord2) && i === (coord1 + 1))
          section.push(puzzle[i][j]);
        if (j === (coord2 + 1) && i === (coord1 + 1))
          section.push(puzzle[i][j]);
        if (j === (coord2 + 2) && i === (coord1))
          section.push(puzzle[i][j]);
        if (j === (coord2) && i === (coord1 + 2))
          section.push(puzzle[i][j]);
        if (j === (coord2 + 2) && i === (coord1 + 1))
          section.push(puzzle[i][j]);
        if (j === (coord2 + 1) && i === (coord1 + 2))
          section.push(puzzle[i][j]);
        if (j === (coord2 + 2) && i === (coord1 + 2))
          section.push(puzzle[i][j]);
      }
    }
    return section;
  };
  
  console.log(getSection(puzzle,1,0)); 
  
  //Step 4: include1to9 DOES NOT WORK //

const includes1to9 = (grid) => {
    for (let i = 0; i < puzzle.length; i++) {
      if (i === grid) grid.push(puzzle[i]);
    
        if (grid.includes(1) 
         && grid.includes(2)
         && grid.includes(3)
         && grid.includes(4)
         && grid.includes(5)
         && grid.includes(6)
         && grid.includes(7)
         && grid.includes(8)
         && grid.includes(9)) {
          return true
          } else {
          return false
        }
     } 
  }
  
  console.log(includes1to9(puzzle, 0))