// Task 8
// Given a year, return the century it is in.
// Example
// For year = 1905, the output should be = 20; For year = 1700, the output should be = 17.

console.time();
function passYear(year)
{
    if(year % 100 == 0)
    {
        return year/100;
    }
    else
    {
        return (year/100) + 1;
    }
}
century=passYear(1700);
console.log(century);
console.timeEnd();
