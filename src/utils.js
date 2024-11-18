// src/utils.js
export function pointsForWord(word) {
    let points = 0;
  
    // Iterate over each character in the word
    for (const char of word.toLowerCase()) {
      // Check if the character is a vowel
      if (/[aeiou]/.test(char)) {
        points += 1;  // Vowel: 1 point
      } else if (/[a-z]/.test(char)) {
        points += 2;  // Consonant: 2 points
      }
    }
  
    return points;
  }
  