const quotes = [
    {teks: "gokil", author: "dkz6"},
    {teks: "gokil super", author: "dkz66"},
    {teks: "gokil super 2", author: "dkz66"},
    {teks: "gokil ultra super", author: "dkz666"},
];

const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const buttonQuote = document.getElementById('button')

function generatedQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length)
    const randomQuotes = quotes[randomIndex]

    quoteText.textContent = `"${randomQuotes.teks}"`
    authorText.textContent = `- ${randomQuotes.author}`
}

buttonQuote.addEventListener('click', generatedQuote)

generatedQuote()