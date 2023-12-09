import assert from "assert";

const starterCode = `/**
* @param {number[]} nums
* @return {number}
*/
function majorityElement(nums){
  // Write your code here
};`;

// checks if the user has the correct code
const solutionHandler = (fn) => {
  // fn is the callback that user's code is passed into
  try {
    const tests = [
      [3, 2, 3],
      [2, 2, 1, 1, 1, 2, 2],
    ];

    const answers = [3, 2];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < tests.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(tests[i]);
      assert.deepEqual(result, answers[i]);
    }
    return true;
  } catch (error) {
    console.log("single-number handler function error");
    throw new Error(error);
  }
};

export const majorityElement = {
  id: "single-number",
  title: "Single Number",
  problemStatement: `<p>Given an array <code>nums</code> of size <code>n</code>, return <em>the majority element</em>.</p>
  <p>The majority element is the element that appears more than <code>⌊n / 2⌋</code> times. You may assume that the majority element always exists in the array.</p>
`,
  examples: [
    {
      id: 1,
      inputText: `nums = [3,2,3]`,
      outputText: "3",
    },
    {
      id: 2,
      inputText: ` nums = [2,2,1,1,1,2,2]`,
      outputText: "2",
    },
  ],
  constraints: `
  <li><code>n == nums.length</code></li>
  <li><code>1 &lt;= n &lt;= 5 * 10<sup>4</sup></code></li>
  <li><code>-10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>
 `,
  handlerFunction: solutionHandler,
  difficulty: "Easy",
  starterCode: starterCode,
  order: 11,
  starterFunctionName: "function majorityElement(",
};
