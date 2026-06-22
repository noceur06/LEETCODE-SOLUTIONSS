// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

// You can use each character in text at most once. Return the maximum number of instances that can be formed.

// Example 1:

// Input: text = "nlaebolko"
// Output: 1
// Example 2:

// Input: text = "loonbalxballpoon"
// Output: 2
// Example 3:

// Input: text = "leetcode"
// Output: 0

let maxNumberOfBalloon = function (text) {
  let count = {};
  for (let char of text) {
    count[char] = (count[char] || 0) + 1;
  }

  return Math.min(
    count["b"] || 0,
    count["a"] || 0,
    Math.floor((count["l"] || 0) / 2),
    Math.floor((count["o"] || 0) / 2),
    count["n"] || 0,
  );
};
