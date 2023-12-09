import assert from "assert";

const starterCode = `function generate(numRows){
  // Write your code here
};`;

// checks if the user has the correct code
const solutionHandler = (fn) => {
  // fn is the callback that user's code is passed into
  try {
    const tests = [5, 1];

    const answers = [
      [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]],
      [[1]],
    ];

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

export const pascalsTriangle = {
  id: "pascals-triangle",
  title: "Pascal's Triangle",
  problemStatement: `<p>Given an integer <code>numRows</code>, return the first numRows of <strong>Pascal's triangle</strong>.</p>
  <br/>
  <p>In Pascal's triangle, each number is the sum of the two numbers directly above it as shown: </p>
  <img src='https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif' />
`,
  examples: [
    {
      id: 1,
      inputText: `numRows = 5`,
      outputText: "[[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]",
    },
    {
      id: 2,
      inputText: `numRows = 1`,
      outputText: "[[1]]",
    },
  ],
  constraints: `
  <li><code>1 &lt;= numRows &lt;= 30</code></li>
 `,
  handlerFunction: solutionHandler,
  difficulty: "Easy",
  starterCode: starterCode,
  order: 7,
  starterFunctionName: "function generate(",
};
