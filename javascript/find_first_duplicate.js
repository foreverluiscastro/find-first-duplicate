function findFirstDuplicate(arr) {
  // type your code here
  let refString = ''
  for (const num of arr) {
    debugger
    if (refString.includes(num)) {
      debugger
      return num
    } else {
      debugger
      refString = refString.concat(num)
    }
  }
  return -1
}

findFirstDuplicate([2,1,3,3,2])

// console.log(typeof ("".concat(5)))

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file

/****************** First Idea ***********************
 *  create a new empty ref string
 * 
 *  iterate through the array
 *    if the ref string includes the element as a substring
 *      return element
 *    else take the element and concat it to the empty string
 * 
 * if there are no dupes, return -1
 * 
 * ***************************************************/

/******************************************************
 * the function seems to be going in order from left to
 * right and returning the first duplicate in the sequence.
 * the empty reference string is to keep track of what numbers
 * have been iterated through so far. Then I use the string 
 * includes method to see if the element has already been added
 * to the reference string. if it is then we have a dupe
 * and if not, then its the first time the number has
 * come up in the sequence to mark it down and keep iterating.
 * then once the loop is done, that means the code never found a 
 * duplicate so return -1.
 * 
 * ***************************************************/