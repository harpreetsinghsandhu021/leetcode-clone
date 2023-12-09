import assert from "assert";

const starterCode = `/**
* @param {number[]} nums
* @return {number}
*/
function removeDuplicates(nums) {
   
};`;

// checks if the user has the correct code
const solutionHandler = (fn) => {
  // fn is the callback that user's code is passed into
  try {
    const tests = [
      [1, 1, 2],
      [0, 0, 1, 1, 1, 2, 2, 3, 3, 4],
    ];

    const answers = [2, 5];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < tests.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(tests[i]);
      assert.deepEqual(result, answers[i]);
    }
    return true;
  } catch (error) {
    console.log("remove-duplicates-from-sorted-array handler function error");
    throw new Error(error);
  }
};

export const removeDuplicates = {
  id: "remove-duplicates-from-sorted-array",
  title: "Remove Duplicates from Sorted Array",
  problemStatement: `
  <p class='mt-3'>Given an integer array <code> nums </code>  sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in <code> nums </code> .</p>
  <br/>
  <p>Consider the number of unique elements of <code>nums</code> to be <code>k</code>, to get accepted, you need to do the following things:</p>
  <ul>
  <li>Change the array <code>nums</code> such that the first <code>k</code> elements of <code>nums</code> contain the unique elements in the order they were present in <code>nums</code> initially. The remaining elements of <code>nums</code> are not important as well as the size of <code>nums</code>.</li>
  <li>Return <code>k</code>.</li>
</ul>
<p><strong>Custom Judge:</strong></p>
<pre>int[] nums = [...]; // Input array
int[] expectedNums = [...]; // The expected answer with correct length

int k = removeDuplicates(nums); // Calls your implementation

assert k == expectedNums.length;
for (int i = 0; i &lt; k; i++) {
    assert nums[i] == expectedNums[i];
}
</pre>
<p>If all assertions pass, then your solution will be <strong>accepted</strong>.</p>

  `,
  examples: [
    {
      id: 1,
      inputText: `nums = [1,1,2]`,
      outputText: "2, nums = [1,2,_]",
      explanation: `Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.It does not matter what you leave beyond the returned k (hence they are underscores).`,
    },
    {
      id: 2,
      inputText: `nums = [0,0,1,1,1,2,2,3,3,4]`,
      outputText: "5, nums = [0,1,2,3,4,_,_,_,_,_]",
      explanation: `Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.It does not matter what you leave beyond the returned k (hence they are underscores).`,
    },
  ],
  constraints: `
  <li><code>1 &lt;= nums.length &lt;= 3 * 10<sup>4</sup></code></li>
  <li><code>-100 &lt;= nums[i] &lt;= 100</code></li>
  <li><code>nums</code> is sorted in <strong>non-decreasing</strong> order.</li>
`,
  handlerFunction: solutionHandler,
  difficulty: "Medium",
  starterCode: starterCode,
  order: 2,
  starterFunctionName: "function removeDuplicates(nums)",
};
