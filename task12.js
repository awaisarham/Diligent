// Task 12

// Given the list of items and their actual prices and sold prices. Find the number of items in sold products which has wrong prices
// Example Input
// Products = ['eggs', 'milk', 'cheese'];
// productPrices = [2.89, 3.29, 5.79];
// productSold = ['eggs', 'eggs', 'cheese', 'milk']
// soldPrice = [2.89, 2.99, 5.97, 3.29];



let products = ["eggs", "milk", "cheese"];
let productPrices = [2.89, 3.29, 5.79];
let productSold = ["eggs", "eggs", "cheese", "milk"];
let soldPrice = [2.89, 2.99, 5.97, 3.29];
  
let count=0;  
productSold.filter(fil);
function fil(p, i)
{
    if(soldPrice[i] !== productPrices[products.indexOf(p)])
    {
     count++;
    }  
}  
console.log(count);