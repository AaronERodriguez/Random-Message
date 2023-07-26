const quote = window.popularQuote
const colorArr = ['bg-red-500', 'bg-green-500']
const changeQuote = () => {
    let color = colorArr[Math.floor(Math.random() * colorArr.length)]
    document.body.setAttribute('class', color + ' transition-colors duration-300 ease-in')
    console.log(color)
}
console.log(popularQuote.getRandomQuote());