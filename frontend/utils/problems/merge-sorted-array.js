import assert from "assert";

const starterCode = `function merge(nums1,m,nums2,n){
  // Write your code here
};`;

// checks if the user has the correct code
const solutionHandler = (fn) => {
  // fn is the callback that user's code is passed into
  try {
    const testCases = [
      {
        nums1: [1, 2, 3, 0, 0, 0],
        m: 3,
        nums2: [2, 5, 6],
        n: 3,
        expected: [1, 2, 2, 3, 5, 6],
      },
      {
        nums1: [1],
        m: 1,
        nums2: [],
        n: 0,
        expected: [1],
      },
      {
        nums1: [0],
        m: 0,
        nums2: [1],
        n: 1,
        expected: [1],
      },
    ];
    // loop all tests to check if the user's code is correct

    for (const testCase of testCases) {
      const { nums1, m, nums2, n, expected } = testCase;
      const result = fn(nums1, m, nums2, n);
      assert.deepStrictEqual(result, expected);
    }

    return true;
  } catch (error) {
    console.log("merge-sorted-array handler function error");
    throw new Error(error);
  }
};

export const merge = {
  id: "merge-sorted-array",
  title: "Merge Sorted Array",
  problemStatement: `<p>You are given a <strong>large integer</strong> represented as an integer array <code>digits</code>, where each <code>digits[i]</code> is the <code>i<sup>th</sup></code> digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading <code>0</code>'s.</p>
  <p><strong>Merge</strong> <code>nums1</code> and <code>nums2</code> into a single array sorted in <strong>non-decreasing order</strong>.</p>
  <p>The final sorted array should not be returned by the function, but instead be <em>stored inside the array </em><code>nums1</code>. To accommodate this, <code>nums1</code> has a length of <code>m + n</code>, where the first <code>m</code> elements denote the elements that should be merged, and the last <code>n</code> elements are set to <code>0</code> and should be ignored. <code>nums2</code> has a length of <code>n</code>.</p>
`,
  examples: [
    {
      id: 1,
      inputText: `nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3`,
      outputText: "[1,2,2,3,5,6]",
      explanation: `The arrays we are merging are [1,2,3] and [2,5,6].
      The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.`,
    },
    {
      id: 2,
      inputText: `nums1 = [1], m = 1, nums2 = [], n = 0`,
      outputText: "[1]",
      explanation: `The arrays we are merging are [1] and [].
      The result of the merge is [1].`,
    },
    {
      id: 3,
      inputText: `nums1 = [0], m = 0, nums2 = [1], n = 1`,
      outputText: "[1]",
      explanation: `The arrays we are merging are [] and [1].
      The result of the merge is [1].
      Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.`,
    },
  ],
  constraints: `
  <li><code>nums1.length == m + n</code></li>
  <li><code>nums2.length == n</code></li>
  <li><code>0 &lt;= m, n &lt;= 200</code></li>
  <li><code>1 &lt;= m + n &lt;= 200</code></li>
  <li><code>-10<sup>9</sup> &lt;= nums1[i], nums2[j] &lt;= 10<sup>9</sup></code></li>
 `,
  handlerFunction: solutionHandler,
  difficulty: "Easy",
  starterCode: starterCode,
  order: 6,
  starterFunctionName: "function merge(",
};
