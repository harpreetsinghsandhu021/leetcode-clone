import assert from "assert";

const starterCode = `/**
* @param {number[]} prices
* @return {number}
*/
function maxProfit(prices){
  // Write your code here
};`;

// checks if the user has the correct code
const solutionHandler = (fn) => {
  // fn is the callback that user's code is passed into
  try {
    const tests = [
      [7, 1, 5, 3, 6, 4],
      [7, 6, 4, 3, 1],
    ];

    const answers = [5, 0];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < tests.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(tests[i]);
      assert.deepEqual(result, answers[i]);
    }
    return true;
  } catch (error) {
    console.log("merge-sorted-array handler function error");
    throw new Error(error);
  }
};

export const maxProfit = {
  id: "best-time-to-buy-and-sell-stock",
  title: "Best Time to Buy and Sell Stock",
  problemStatement: `<p>You are given an array <code>prices</code> where <code>prices[i]</code> is the price of a given stock on the <code>i<sup>th</sup></code> day.</p>
  <p>You want to maximize your profit by choosing a <strong>single day</strong> to buy one stock and choosing a <strong>different day in the future</strong> to sell that stock.</p>
  <p>Return <em>the maximum profit you can achieve from this transaction</em>. If you cannot achieve any profit, return <code>0</code>.</p>
`,
  examples: [
    {
      id: 1,
      inputText: `prices = [7,1,5,3,6,4]`,
      outputText: "5",
      explanation: `Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
      Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.`,
    },
    {
      id: 2,
      inputText: `prices = [7,6,4,3,1]`,
      outputText: "0",
      explanation: `In this case, no transactions are done and the max profit = 0.`,
    },
  ],
  constraints: `
	<li><code>1 &lt;= prices.length &lt;= 10<sup>5</sup></code></li>
	<li><code>0 &lt;= prices[i] &lt;= 10<sup>4</sup></code></li>
 `,
  handlerFunction: solutionHandler,
  difficulty: "Easy",
  starterCode: starterCode,
  order: 9,
  starterFunctionName: "function maxProfit(",
};
