import assert from "assert";

const starterCode = `/**
* @param {number[]} nums
* @param {number} val
* @return {number}
*/
function removeElement(nums, val) {
   
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

export const removeElement = {
  id: "remove-element",
  title: "Remove Element",
  problemStatement: `
  <div class="xFUwe" data-track-load="description_content"><p>Given an integer array <code>nums</code> and an integer <code>val</code>, remove all occurrences of <code>val</code> in <code>nums</code> <a href="https://en.wikipedia.org/wiki/In-place_algorithm" target="_blank"><strong>in-place</strong></a>. The order of the elements may be changed. Then return <em>the number of elements in </em><code>nums</code><em> which are not equal to </em><code>val</code>.</p>

  <p>Consider the number of elements in <code>nums</code> which are not equal to <code>val</code> be <code>k</code>, to get accepted, you need to do the following things:</p>
  
  <ul>
      <li>Change the array <code>nums</code> such that the first <code>k</code> elements of <code>nums</code> contain the elements which are not equal to <code>val</code>. The remaining elements of <code>nums</code> are not important as well as the size of <code>nums</code>.</li>
      <li>Return <code>k</code>.</li>
  </ul>
  
  <p><strong>Custom Judge:</strong></p>
  
  <p>The judge will test your solution with the following code:</p>
  
  <pre>int[] nums = [...]; // Input array
  int val = ...; // Value to remove
  int[] expectedNums = [...]; // The expected answer with correct length.
                              // It is sorted with no values equaling val.
  
  int k = removeElement(nums, val); // Calls your implementation
  
  assert k == expectedNums.length;
  sort(nums, 0, k); // Sort the first k elements of nums
  for (int i = 0; i &lt; actualLength; i++) {
      assert nums[i] == expectedNums[i];
  }
  </pre>
  
  <p>If all assertions pass, then your solution will be <strong>accepted</strong>.</p>
  </div>

  `,
  examples: [
    {
      id: 1,
      inputText: `nums = [3,2,2,3], val = 3`,
      outputText: "2, nums = [2,2,_,_]",
      explanation: `Your function should return k = 2, with the first two elements of nums being 2.
      It does not matter what you leave beyond the returned k (hence they are underscores).`,
    },
    {
      id: 2,
      inputText: `nums = [0,1,2,2,3,0,4,2], val = 2`,
      outputText: "5, nums = [0,1,4,0,3,_,_,_]",
      explanation: `Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
      Note that the five elements can be returned in any order.It does not matter what you leave beyond the returned k (hence they are underscores).`,
    },
  ],
  constraints: `
  <li><code>0 &lt;= nums.length &lt;= 100</code></li>
  <li><code>0 &lt;= nums[i] &lt;= 50</code></li>
  <li><code>0 &lt;= val &lt;= 100</code></li>
`,
  handlerFunction: solutionHandler,
  difficulty: "Medium",
  starterCode: starterCode,
  order: 3,
  starterFunctionName: "function removeElement(nums,val)",
};
