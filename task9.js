// Task 9
// Count frequencies of each entry in an array For example const fruitBasket = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig' ];
// It should return an object like this { banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1 }


const arr = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig'];
const counts = {};
for(let i=0; i<arr.length; i++)
{
    if(arr[i] in counts)
    {
    counts[arr[i]]=counts[arr[i]]+1;
    }
    else
    {
    counts[arr[i]]=1;
    }
}

console.log(counts);