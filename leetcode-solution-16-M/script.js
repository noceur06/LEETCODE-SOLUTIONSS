// Given a string s consisting only of characters a, b and c.

// Return the number of substrings containing at least one occurrence of all these characters a, b and c.

// Example 1:

// Input: s = "abcabc"
// Output: 10
// Explanation: The substrings containing at least one occurrence of the characters a, b and c are "abc", "abca", "abcab", "abcabc", "bca", "bcab", "bcabc", "cab", "cabc" and "abc" (again).
// Example 2:

// Input: s = "aaacb"
// Output: 3
// Explanation: The substrings containing at least one occurrence of the characters a, b and c are "aaacb", "aacb" and "acb".
// Example 3:

// Input: s = "abc"
// Output: 1

// explain me this and what should i know to solve this and how can i solve this tell me with what i can solve these with steps

let numberOfStrings = function (s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      let sub = s.slice(i, j + 1);
      if (sub.includes("a") && sub.includes("b") && sub.includes("c")) {
        count++;
      }
    }
  }
  return count;
};

// REAL SOLUTION FOR LEETCODE


// var numberOfSubstrings = function (s) {
//     let count = 0;
//     let left = 0;

//     let freq = {
//         a: 0,
//         b: 0,
//         c: 0
//     };

//     for (let right = 0; right < s.length; right++) {
//         freq[s[right]]++;

//         while (freq.a > 0 && freq.b > 0 && freq.c > 0) {
//             count += s.length - right;

//             freq[s[left]]--;
//             left++;
//         }
//     }

//     return count;
// };