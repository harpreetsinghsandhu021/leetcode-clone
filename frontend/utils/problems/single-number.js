import assert from "assert";

const starterCode = `/**
* @param {number[]} nums
* @return {number}
*/
function singleNumber(nums){
  // Write your code here
};`;

// checks if the user has the correct code
const solutionHandler = (fn) => {
  // fn is the callback that user's code is passed into
  try {
    const tests = [[2, 2, 1], [4, 1, 2, 1, 2], [1]];

    const answers = [1, 4, 1];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < tests.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(tests[i]);
      assert.deepEqual(result, answers[i]);
    }
    return true;
  } catch (error) {
    console.log("merge-sorted-array handler function error");
    throw new Error(error);
  }
};

export const singleNumber = {
  id: "single-number",
  title: "Single Number",
  problemStatement: `<p>Given a <strong>non-empty</strong>&nbsp;array of integers <code>nums</code>, every element appears <em>twice</em> except for one. Find that single one.</p>
  <p>You must implement a solution with a linear runtime complexity and use only constant extra space.</p>
`,
  examples: [
    {
      id: 1,
      inputText: `nums = [2,2,1]`,
      outputText: "1",
    },
    {
      id: 2,
      inputText: `[4,1,2,1,2]`,
      outputText: "4",
    },
    {
      id: 3,
      inputText: `[1]`,
      outputText: "1",
    },
  ],
  constraints: `
  <li><code>1 &lt;= nums.length &lt;= 3 * 10<sup>4</sup></code></li>
  <li><code>-3 * 10<sup>4</sup> &lt;= nums[i] &lt;= 3 * 10<sup>4</sup></code></li>
  <li>Each element in the array appears twice except for one element which appears only once.</li>
 `,
  handlerFunction: solutionHandler,
  difficulty: "Easy",
  starterCode: starterCode,
  order: 10,
  starterFunctionName: "function singleNumber(",
};
