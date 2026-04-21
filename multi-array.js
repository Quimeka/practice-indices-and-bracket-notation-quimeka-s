/*Instructions
You are managing a library system where books and movies are stored in a 2D
array, with each row representing a shelf, and each column representing an item
on that shelf.*/


/*
Make sure to write the code for each task using only bracket notation.
Task 1: Create a multi-dimensional array with nine books and/or movies of your
choice.*/
let moviesArray = [
    ["Love and Basketball", "Two Can Play That Game", "Love Jones"],
    ["Waiting to Exhale", "Friday", "Friday After Next"],
    ["Do the Right Thing", "ATL", "Barbershop"]
];

/*Task 2: Access and log all the elements in the array using bracket notation with
numbers.*/
console.log("\nPrinting elements in the array using bracket notation with numbers:")

console.log(moviesArray[0][0]);
console.log(moviesArray[0][1]);
console.log(moviesArray[0][2]);
console.log(moviesArray[1][0]);
console.log(moviesArray[1][1]);
console.log(moviesArray[1][2]);
console.log(moviesArray[2][0]);
console.log(moviesArray[2][1]);
console.log(moviesArray[2][2]);


/*Task 3: Access and log all the elements in the array using bracket notation with
variables as indices. Use the variables row and item.*/

console.log("\nPrinting elements in the array using bracket notation with variables as indices:")

for (let row = 0; row < moviesArray.length; row ++){
    for (let item = 0; item < moviesArray.length; item++){
        console.log(moviesArray[row][item]);
    } 
}


/*Task 4: Write a loop that prints all the items on the second shelf.*/

console.log("\nPrinting second row content:")
for (let item = 0; item < moviesArray.length; item++){
        console.log(moviesArray[1][item]);
    }