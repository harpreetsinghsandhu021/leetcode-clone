import assert from "assert";

const starterCode = `/**
* @param {number[]} nums
* @return {number}
*/
function containsDuplicate(nums){
  // Write your code here
};`;

// checks if the user has the correct code
const solutionHandler = (fn) => {
  // fn is the callback that user's code is passed into
  try {
    const tests = [
      [1, 2, 3, 1],
      [1, 2, 3, 4],
      [1, 1, 1, 3, 3, 4, 3, 2, 4, 2],
    ];

    const answers = [true, false, true];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < tests.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(tests[i]);
      assert.deepEqual(result, answers[i]);
    }
    return true;
  } catch (error) {
    console.log("contains-duplicate handler function error");
    throw new Error(error);
  }
};

export const containsDuplicate = {
  id: "contains-duplicate",
  title: "Contains Duplicate",
  problemStatement: `<p>Given an integer array <code>nums</code>, return <code>true</code> if any value appears <strong>at least twice</strong> in the array, and return <code>false</code> if every element is distinct.</p>
`,
  examples: [
    {
      id: 1,
      inputText: `nums = [1,2,3,1]`,
      outputText: "true",
    },
    {
      id: 2,
      inputText: `nums = [1,2,3,4]`,
      outputText: "false",
    },
    {
      id: 3,
      inputText: `nums = [1,1,1,3,3,4,3,2,4,2]`,
      outputText: "true",
    },
  ],
  constraints: `
  <li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
  <li><code>-10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>
 `,
  handlerFunction: solutionHandler,
  difficulty: "Easy",
  starterCode: starterCode,
  order: 12,
  starterFunctionName: "function containsDuplicate(",
};
