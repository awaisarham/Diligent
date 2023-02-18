// Task 7
// Given the string, check if it is a palindrome.

console.time();
let string="abba";
let reverseString ="";
for(let i=string.length-1; i>=0; i--)
   {
   reverseString+=string[i]; 
   }
  if(string==reverseString)
   {
    console.log("true");
   }
  else
   {
  console.log("false");
   }
   console.timeEnd();