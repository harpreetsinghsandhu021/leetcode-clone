import assert from "assert";

const starterCode = `
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
function getRow(rowIndex){
  // Write your code here
};`;

// checks if the user has the correct code
const solutionHandler = (fn) => {
  // fn is the callback that user's code is passed into
  try {
    const tests = [3, 0, 1];

    const answers = [[1, 3, 3, 1], [1], [1, 1]];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < tests.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(tests[i]);
      assert.deepEqual(result, answers[i]);
    }
    return true;
  } catch (error) {
    console.log("pascals-triangle handler function error");
    throw new Error(error);
  }
};

export const pascalsTriangle2 = {
  id: "pascals-triangle-ii",
  title: "Pascal's Triangle II",
  problemStatement: `<p>Given an integer <code>rowIndex</code>, return the <code>rowIndex<sup>th</sup></code> (<strong>0-indexed</strong>) row of the <strong>Pascal's triangle</strong>.</p>
  <br/>
  <p>In <strong>Pascal's triangle</strong>, each number is the sum of the two numbers directly above it as shown:</p>
  <img src='https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif' />
`,
  examples: [
    {
      id: 1,
      inputText: `rowIndex = 3`,
      outputText: "[1,3,3,1]",
    },
    {
      id: 2,
      inputText: `rowIndex = 0`,
      outputText: "[1]",
    },
    {
      id: 3,
      inputText: `rowIndex = 1`,
      outputText: "[1,1]",
    },
  ],
  constraints: `
  <li><code>0 &lt;= rowIndex &lt;= 33</code></li>
 `,
  handlerFunction: solutionHandler,
  difficulty: "Easy",
  starterCode: starterCode,
  order: 8,
  starterFunctionName: "function getRow(",
};
