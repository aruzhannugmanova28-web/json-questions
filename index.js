import data from './rawBooks.json' with { type: 'json' };
console.log(data[57]);
console.log(data[57].title);
console.log(data[57]['# Pages']);

const filteredArray = data.filter(book => book.title !== 'zzzzzz');
const main_array = filteredArray.filter(book => book.title !== ' ');

main_array.forEach(book => {
    console.log(book.title);
}
);

console.log("--------#1: avg time it takes Mx. Bradford to read a book---------");

const avgtime_filter_1 = main_array.filter(book => book ["Time on TBR (days)"] !== 'N/A');
const avgtime_filter_2 = avgtime_filter_1.filter(book => book ["Time on TBR (days)"] >= 0);
const avgtime_filter_3 = avgtime_filter_2.filter(book => book ["Time on TBR (days)"] < 10000);

console.log(avgtime_filter_3)

const cleanedValues = avgtime_filter_3.map(
  book => Number(book["Time on TBR (days)"])
);

function calculateArrayAverage(arr) {
  if (arr.length === 0) {
    return 0; 
  }
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

const average = calculateArrayAverage(cleanedValues);
console.log(average);
 





console.log("--------#2: % of books that are read---------");

const number_books_1 = main_array.filter(book => book ["read?"] !== 'No');

const number_books= number_books_1.map(
  book => Number(book["read?"])
);

function calculate_number_books(arr) {
const read = number_books_1.length;
  return (read / main_array.length) * 100;
}

const percent_books = calculate_number_books(number_books);
console.log(percent_books);






console.log("--------#3: what are my fav genre based on how many purchases---------");

const genre_of_books = main_array.flatMap(book =>
  String(book.category || "")
    .split(/[,/;&]| and /i)    
);

function frequency(arr){
    const frequencyCounter = {};
    for (const item of arr) {
        frequencyCounter[item] = (frequencyCounter[item] || 0) + 1;
    }

    let mostFrequentelement= null; 
    let maxcount = 0; 

    for (const item in frequencyCounter){
        if (frequencyCounter[item]> maxcount){
            maxcount=frequencyCounter[item];
            mostFrequentelement=item;
        }
    }
    return mostFrequentelement
}

const genre = frequency(genre_of_books);
console.log(genre);

console.log("--------#4: what year have i aquired the most books---------");

const year_of_book = main_array.flatMap(book =>
  String(book ["Date Bought"] || "")
    .split(/[,/;&]| and /i)    
);

function frequency_years(arr){
    const frequencyCounter = {};
    for (const item of arr) {
        frequencyCounter[item] = (frequencyCounter[item] || 0) + 1;
    }

    let mostFrequentelement= null; 
    let maxcount = 0; 

    for (const item in frequencyCounter){
        if (frequencyCounter[item]> maxcount){
            maxcount=frequencyCounter[item];
            mostFrequentelement=item;
        }
    }
    return mostFrequentelement
}

const year = frequency_years(year_of_book);
console.log(year);


console.log("--------#5: avg number of pages ---------");

const cleanedValues_pages = main_array.map(
  book => Number(book["# Pages"])
);

function calculatepagesAverage(arr) {
  if (arr.length === 0) {
    return 0; 
  }
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

const average_pages = calculatepagesAverage(cleanedValues_pages);
console.log(average_pages);
 
