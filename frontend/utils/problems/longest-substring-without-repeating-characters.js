import assert from "assert";

const starterCode = `function lengthOfLongestSubstring(s){
  // Write your code here
};`;

// checks if the user has the correct code
const solutionHandler = (fn) => {
  // fn is the callback that user's code is passed into
  try {
    const tests = ["abcabcbb", "bbbbb", "pwwkew"];

    const answers = [3, 1, 3];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < tests.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(tests[i]);
      assert.deepEqual(result, answers[i]);
    }
    return true;
  } catch (error) {
    console.log(
      "longest-substring-without-repeating-characters handler function error"
    );
    throw new Error(error);
  }
};

export const LongestSubstringWithoutRepeatingCharacters = {
  id: "longest-substring-without-repeating-characters",
  title: " Longest Substring Without Repeating Characters",
  problemStatement: `<p class='mt-3'>
  Given a string <code> s </code>, find the length of the longest substring
 without repeating characters.
</p>
`,
  examples: [
    {
      id: 1,
      inputText: `s = "abcabcbb"`,
      outputText: "3",
      explanation: `The answer is "abc", with the length of 3.`,
    },
    {
      id: 2,
      inputText: `s = "bbbbb"`,
      outputText: "1",
      explanation: `The answer is "b", with the length of 1.`,
    },
    {
      id: 3,
      inputText: `s = "pwwkew"`,
      outputText: "3",
      explanation: `The answer is "wke", with the length of 3.
      Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.`,
    },
  ],
  constraints: `<li class='mt-2'>
  <code>0 <= s.length <= 5 * 104</code>
</li> <li class='mt-2'>
<code>s</code>
consists of English letters, digits, symbols and spaces.
</li> `,
  handlerFunction: solutionHandler,
  difficulty: "Medium",
  starterCode: starterCode,
  order: 1,
  starterFunctionName: "function lengthOfLongestSubstring(",
};
