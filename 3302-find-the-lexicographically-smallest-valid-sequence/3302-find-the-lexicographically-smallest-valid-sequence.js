/**
 * @param {string} word1
 * @param {string} word2
 * @return {number[]}
 */
var validSequence = function(word1, word2) {
    let m = word2.length;

    let last = new Array(m).fill(-1);

    // Find positions for matching word2 from the RIGHT
    let i = word1.length - 1;
    let j = word2.length - 1;

    while (i >= 0 && j >= 0) {
        if (word1[i] === word2[j]) {
            last[j] = i;
            j--;
        }

        i--;
    }

    let result = [];
    let changed = true;
    j = 0;

    // Go from LEFT to RIGHT
    for (let i = 0; i < word1.length; i++) {

        if (j === m) {
            break;
        }

        // Exact match
        if (word1[i] === word2[j]) {
            result.push(i);
            j++;
        }

        // Use our one allowed mismatch
        else if (
            changed &&
            (j === m - 1 || i < last[j + 1])
        ) {
            result.push(i);
            changed = false;
            j++;
        }
    }

    return j === m ? result : [];
};