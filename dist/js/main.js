//Variables
const quote = window.popularQuote
const colorArr = ['bg-red-500', 'bg-yellow-400', 'bg-green-500', 'bg-teal-500', 'bg-blue-500', 'bg-indigo-500', 'bg-purple-500', 'bg-pink-500'];

const changeQuote = () => {
    let color = colorArr[Math.floor(Math.random() * colorArr.length)]
    let quote = findQuote();
    changeColor(color);
    document.getElementById('movie').innerHTML = quote.movie;
    document.getElementById('quote').innerHTML = quote.quote;
    document.getElementById('year').innerHTML = quote.year;
    let firstLetter = quote.type.charAt(0);
    firstLetter = firstLetter.toUpperCase();
    let newType = firstLetter + quote.type.slice(1, quote.type.length); 
    console.log(newType)
    document.getElementById('type').innerHTML = newType;
}
const changeColor = (color) => {
    document.body.setAttribute('class', color + ' transition-colors duration-300 ease-in')
}
const findQuote = () => {
    let result = quote.getSomeRandom(1)[0];
    console.log(result);
    return result;
}