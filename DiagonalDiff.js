function diagonalDifference(arr) {
    
    let d1 = 0;
    let d2 = 0;
        for(let row = 0; row<arr.length; row++) {
            d1 += arr[row][row];
            d2 += arr[row][arr.length - row -1];
                }
    
               return Math.abs(d1 - d2);
    
    }