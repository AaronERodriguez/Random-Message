//Import popular Movie quote
const popularQuote = require('popular-movie-quotes');
const prompt = require('prompt-sync')();

//Global variables
let searchType = prompt('What type of search would you prefer? (random, year, movie, type):');
let quoteObject;

while (searchType !== 'random' && searchType !== 'year' && searchType !== 'movie' && searchType !== 'type') {
    searchType = prompt('Please type a valid search type (random, year, movie, type): ');
}

console.log(searchType); 

switch (searchType) {
    case 'random':
        quoteObject = popularQuote.getSomeRandom(1)[0];
        break;
    default:
        break;
}
console.log(quoteObject);