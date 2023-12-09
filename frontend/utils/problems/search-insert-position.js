import assert from "assert";

const starterCode = `function searchInsert(nums,target){
  // Write your code here
};`;

// checks if the user has the correct code
const solutionHandler = (fn) => {
  // fn is the callback that user's code is passed into
  try {
    const nums = [
      [1, 3, 5, 6],
      [1, 3, 5, 6],
      [1, 3, 5, 6],
    ];

    const targets = [5, 2, 7];
    const answers = [2, 1, 4];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < nums.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(nums[i], targets[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error) {
    console.log("searchInsert handler function error");
    throw new Error(error);
  }
};

export const searchInsertPosition = {
  id: "search-insert-position",
  title: "Search Insert Position",
  problemStatement: `<p class='mt-3'>
  Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
</p>
<p>You must&nbsp;write an algorithm with&nbsp;<code>O(log n)</code> runtime complexity.</p>
`,
  examples: [
    {
      id: 1,
      inputText: "nums = [1,3,5,6], target = 5",
      outputText: "2",
    },
    {
      id: 2,
      inputText: "nums = [1,3,5,6], target = 2",
      outputText: "1",
    },
    {
      id: 3,
      inputText: "nums = [1,3,5,6], target = 7",
      outputText: "4",
    },
  ],
  constraints: `
  <li><code>1 &lt;= nums.length &lt;= 10<sup>4</sup></code></li>
  <li><code>-10<sup>4</sup> &lt;= nums[i] &lt;= 10<sup>4</sup></code></li>
  <li><code>nums</code> contains <strong>distinct</strong> values sorted in <strong>ascending</strong> order.</li>
  <li><code>-10<sup>4</sup> &lt;= target &lt;= 10<sup>4</sup></code></li>
`,
  handlerFunction: solutionHandler,
  difficulty: "Easy",
  starterCode: starterCode,
  order: 4,
  starterFunctionName: "function searchInsert(",
};
