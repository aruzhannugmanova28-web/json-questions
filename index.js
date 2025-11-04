import data from './rawBooks.json' with { type: 'json' };
console.log(data[57]);
console.log(data[57].title);
console.log(data[57]['# Pages']);

const filteredArray = data.filter(book => book.title !== 'zzzzzz');
const main_array = filteredArray.filter(book => book.title !== '');

main_array.forEach(book => {
    console.log(book.title);
}
);
// Output: [ { id: 2, name: 'Bob', city: 'London' } ]
console.log("--------#1: avg time it takes Mx. Bradford to read a book---------");
const avgtime_filter_1 = main_array.filter(book => book ["Time on TBR (days)"] !== 'N/A');
const avgtime_filter_2 = main_array.filter(book => book ["Time on TBR (days)"] !== 'N/A');


avgtime_filter.forEach(book => {
    console.log(book["Time on TBR (days)"]);
}
);



console.log("--------#2: % of books that are read---------");



console.log("--------#3: what are my fav genre based on how many purchases---------");



console.log("--------#4: what year have i aquired the most books---------");



console.log("--------#5: what year have i aquired the most books---------");



// fetch('./rawBooks.json')
//     .then((response) => response.json())
//     .then((json) => console.log(json));
