// Your tests here
import { pointsForWord } from "../utils";

describe("pointsForWord", () => {
  it("calculates the total points for a word (1 point per vowel, 2 per consonant)", () => {
    const word = "test"; // Example word to test
    const points = pointsForWord(word);
    expect(points).toBe(7);  // t=2, e=1, s=2, t=2 => 2+1+2+2 = 7
  });

  it("handles uppercase and lowercase input", () => {
    const word = "tEsT";  // Mixed case word to test case insensitivity
    const points = pointsForWord(word);
    expect(points).toBe(7);  // Same points as "test" because of case insensitivity
  });

  it("calculates correctly for a word with only vowels", () => {
    const word = "aeiou";
    const points = pointsForWord(word);
    expect(points).toBe(5);  // All vowels, 1 point each (a=1, e=1, i=1, o=1, u=1 => 1+1+1+1+1 = 5)
  });

  it("calculates correctly for a word with only consonants", () => {
    const word = "bcdfg";
    const points = pointsForWord(word);
    expect(points).toBe(10);  // All consonants, 2 points each (b=2, c=2, d=2, f=2, g=2 => 2+2+2+2+2 = 10)
  });

  it("returns 0 points for an empty string", () => {
    const word = "";
    const points = pointsForWord(word);
    expect(points).toBe(0);  // An empty string has no characters, so 0 points
  });
});
