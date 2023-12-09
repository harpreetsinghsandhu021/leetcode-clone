import assert from "assert";

const starterCode = `function missingNumber(nums){
  // Write your code here
};`;

// checks if the user has the correct code
const solutionHandler = (fn) => {
  // fn is the callback that user's code is passed into
  try {
    const tests = [
      [3, 0, 1],
      [0, 1],
      [9, 6, 4, 2, 3, 5, 7, 0, 1],
    ];

    const answers = [2, 2, 8];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < tests.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(tests[i]);
      assert.deepEqual(result, answers[i]);
    }
    return true;
  } catch (error) {
    console.log("missing-number handler function error");
    throw new Error(error);
  }
};

export const missingNumber = {
  id: "missing-number",
  title: "Missing Number",
  problemStatement: `<p>Given an array <code>nums</code> containing <code>n</code> distinct numbers in the range <code>[0, n]</code>, return <em>the only number in the range that is missing from the array.</em></p>
`,
  examples: [
    {
      id: 1,
      inputText: `nums = [3,0,1]`,
      outputText: `2`,
      explanation: `n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.`,
    },
    {
      id: 2,
      inputText: `nums = [0,1]`,
      outputText: `2`,
      explanation: `n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.`,
    },
    {
      id: 3,
      inputText: `nums = [9,6,4,2,3,5,7,0,1]`,
      outputText: `8`,
      explanation: `n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.`,
    },
  ],
  constraints: `
  <li><code>0 &lt;= nums.length &lt;= 20</code></li>
  <li><code>-2<sup>31</sup> &lt;= nums[i] &lt;= 2<sup>31</sup> - 1</code></li>
  <li>All the values of <code>nums</code> are <strong>unique</strong>.</li>
  <li><code>nums</code> is sorted in ascending order.</li>
 `,
  handlerFunction: solutionHandler,
  difficulty: "Easy",
  starterCode: starterCode,
  order: 14,
  starterFunctionName: "function missingNumber(",
};
