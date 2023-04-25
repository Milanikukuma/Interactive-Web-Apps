const data = {
    lists: [
      ['first', [15, 11, 13, 7, 5]],
      ['second', [2, 6, 8, 4, 14, 12, 10]],
      ['third', [9, 3, 1]],
    ],
  };
  
  const result = [];
  
  // Only edit below
   
  //the code defines a function called extraBiggest ,it repeats through each list and finds the largest number in the last position it then removes the largest number from the list and adds it to the "result"
  const extractBiggest = () => {
    let max = -Infinity;
    let maxIndex = -1;
    
    // iterate(repeat a perfomance) through each list in the data object by using the loop method.
    for (let i = 0; i < data.lists.length; i++) {
      const list = data.lists[i][1];
      const lastIndex = list.length - 1;
      
      // check if the last element in the list is the new max
      if (list[lastIndex] > max) {
        max = list[lastIndex];
        maxIndex = i;
      }
    }
    
    // remove the max value from the list and add it to the result array
    if (maxIndex >= 0) {
      result.push(max);
      data.lists[maxIndex][1].pop();
    }
  };
  
  // Only edit above
  
  // call extractBiggest 15 times to fill up the result array
  for (let i = 0; i < 15; i++) {
    extractBiggest();
  }
   //all the added numbers on the results are printed on the console
  console.log(result);
  ``