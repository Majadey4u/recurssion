// Function to check if a word is a palindrome
function palindrome_check(word) {
  // Initialize variables
  let start = 0;
  let end = word.length - 1;

  // Loop until start is less than end
  while (start < end) {
      // If the characters at start and end positions are not equal
      if (word[start] !== word[end]) {
          return "false"; // Not a palindrome
      }
      
      // Move start pointer forward and end pointer backward
      start++; // Increase start by 1
      end--; // Decrease end by 1
  }
  
  // If the loop completes without returning false, it's a palindrome
  return "true"; // It's a palindrome
}

// Example usage:
let word = "rotator"; // The word to check
let result = palindrome_check(word); // Call the function

// Print the result
if (result === "true") {
  console.log("The word is a palindrome");
} else {
  console.log("The word is not a palindrome");
}
