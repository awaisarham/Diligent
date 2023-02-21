// Task 10
// Given a square matrix, calculate the absolute difference between the sums of its diagonals.
// For example, the square matrix is shown below:
// 1 2 3
// 4 5 6
// 9 8 9

function difference(arr)
{
    let diagonal1=0;
    let diagonal2=0;
for(let i=0; i<arr.length; i++)
   {
    diagonal1=diagonal1+arr[i][i];
    diagonal2=diagonal2+arr[(arr.length-1)-i][i];
   }
return (diagonal2-diagonal1);

}
arr = [[1,2,3],[4,5,6],[9,8,9]];
output=difference(arr); 
console.log(output);
