import assert from "assert";

const starterCode = `/**
* @param {number[]} nums
* @return {number}
*/
function containsNearbyDuplicate(nums){
  // Write your code here
};`;

// checks if the user has the correct code
const solutionHandler = (fn) => {
  // fn is the callback that user's code is passed into
  try {
    const testCases = [
      {
        nums: [1, 2, 3, 1],
        k: 3,
        answer: true,
      },
      {
        nums: [1, 0, 1, 1],
        k: 1,
        answer: true,
      },
      {
        nums: [1, 2, 3, 1, 2, 3],
        k: 2,
        answer: false,
      },
    ];

    // loop all tests to check if the user's code is correct
    for (const testCase of testCases) {
      const { nums, k, answer } = testCase;
      const result = fn(nums, k);
      assert.deepStrictEqual(result, answer);
    }

    return true;
  } catch (error) {
    console.log("contains-duplicate handler function error");
    throw new Error(error);
  }
};

export const containsNearbyDuplicate = {
  id: "contains-duplicate-ii",
  title: "Contains Duplicate II",
  problemStatement: `<p>Given an integer array <code>nums</code> and an integer <code>k</code>, return <code>true</code> <em>if there are two <strong>distinct indices</strong> </em><code>i</code><em> and </em><code>j</code><em> in the array such that </em><code>nums[i] == nums[j]</code><em> and </em><code>abs(i - j) &lt;= k</code>.</p>
`,
  examples: [
    {
      id: 1,
      inputText: `nums = [1,2,3,1], k = 3]`,
      outputText: "true",
    },
    {
      id: 2,
      inputText: `nums = [1,0,1,1], k = 1`,
      outputText: "true",
    },
    {
      id: 3,
      inputText: `nums = [1,2,3,1,2,3], k = 2`,
      outputText: "false",
    },
  ],
  constraints: `
  <li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
  <li><code>-10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>
  <li><code>0 &lt;= k &lt;= 10<sup>5</sup></code></li>
 `,
  handlerFunction: solutionHandler,
  difficulty: "Easy",
  starterCode: starterCode,
  order: 13,
  starterFunctionName: "function containsNearbyDuplicate(",
};
