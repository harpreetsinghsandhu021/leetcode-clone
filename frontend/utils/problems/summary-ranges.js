import assert from "assert";

const starterCode = `function summaryRanges(digits){
  // Write your code here
};`;

// checks if the user has the correct code
const solutionHandler = (fn) => {
  // fn is the callback that user's code is passed into
  try {
    const tests = [
      [0, 1, 2, 4, 5, 7],
      [0, 2, 3, 4, 6, 8, 9],
    ];

    const answers = [["0->2", "4->5", "7"][("0", "2->4", "6", "8->9")]];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < tests.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(tests[i]);
      assert.deepEqual(result, answers[i]);
    }
    return true;
  } catch (error) {
    console.log("summary ranges handler function error");
    throw new Error(error);
  }
};

export const summaryRanges = {
  id: "summary-ranges",
  title: "Summary Ranges",
  problemStatement: `<p>You are given a <strong>sorted unique</strong> integer array <code>nums</code>.</p>
  <p>A <strong>range</strong> <code>[a,b]</code> is the set of all integers from <code>a</code> to <code>b</code> (inclusive).</p>
  <p>Return <em>the <strong>smallest sorted</strong> list of ranges that <strong>cover all the numbers in the array exactly</strong></em>. That is, each element of <code>nums</code> is covered by exactly one of the ranges, and there is no integer <code>x</code> such that <code>x</code> is in one of the ranges but not in <code>nums</code>.</p>
  <p>Each range <code>[a,b]</code> in the list should be output as:</p>
  <ul>
	<li><code>"a-&gt;b"</code> if <code>a != b</code></li>
	<li><code>"a"</code> if <code>a == b</code></li>
</ul>
<p>&nbsp;</p>
`,
  examples: [
    {
      id: 1,
      inputText: `nums = [0,1,2,4,5,7]`,
      outputText: `["0->2","4->5","7"]`,
      explanation: `The ranges are:
      [0,2] --> "0->2"
      [4,5] --> "4->5"
      [7,7] --> "7"`,
    },
    {
      id: 2,
      inputText: `nums = [0,2,3,4,6,8,9]`,
      outputText: `["0","2->4","6","8->9"]`,
      explanation: `The ranges are:
      [0,0] --> "0"
      [2,4] --> "2->4"
      [6,6] --> "6"
      [8,9] --> "8->9".`,
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
  order: 13,
  starterFunctionName: "function summaryRanges(",
};
