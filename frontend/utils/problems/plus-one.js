import assert from "assert";

const starterCode = `function plusOne(digits){
  // Write your code here
};`;

// checks if the user has the correct code
const solutionHandler = (fn) => {
  // fn is the callback that user's code is passed into
  try {
    const tests = [[1, 2, 3], [4, 3, 2, 1], [9]];

    const answers = [
      [1, 2, 4],
      [4, 3, 2, 2],
      [1, 0],
    ];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < tests.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(tests[i]);
      assert.deepEqual(result, answers[i]);
    }
    return true;
  } catch (error) {
    console.log("plus-one handler function error");
    throw new Error(error);
  }
};

export const plusOne = {
  id: "plus-one",
  title: "Plus One",
  problemStatement: `<p>You are given a <strong>large integer</strong> represented as an integer array <code>digits</code>, where each <code>digits[i]</code> is the <code>i<sup>th</sup></code> digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading <code>0</code>'s.</p>
  <p>Increment the large integer by one and return <em>the resulting array of digits</em>.</p>
`,
  examples: [
    {
      id: 1,
      inputText: `digits = [1,2,3]`,
      outputText: "[1,2,4]",
      explanation: `The array represents the integer 123.
      Incrementing by one gives 123 + 1 = 124.
      Thus, the result should be [1,2,4].`,
    },
    {
      id: 2,
      inputText: `digits = [4,3,2,1]`,
      outputText: "[4,3,2,2]",
      explanation: `The array represents the integer 4321.
      Incrementing by one gives 4321 + 1 = 4322.
      Thus, the result should be [4,3,2,2].`,
    },
    {
      id: 3,
      inputText: `digits = [9]`,
      outputText: "[1,0]",
      explanation: `The array represents the integer 9.
      Incrementing by one gives 9 + 1 = 10.
      Thus, the result should be [1,0].`,
    },
  ],
  constraints: `
  <li><code>1 &lt;= digits.length &lt;= 100</code></li>
  <li><code>0 &lt;= digits[i] &lt;= 9</code></li>
  <li><code>digits</code> does not contain any leading <code>0</code>'s.</li>
 `,
  handlerFunction: solutionHandler,
  difficulty: "Easy",
  starterCode: starterCode,
  order: 5,
  starterFunctionName: "function plusOne(",
};
