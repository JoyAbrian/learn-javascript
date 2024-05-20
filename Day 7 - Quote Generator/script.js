const api_url = "https://api.quotable.io/random"

const quote = document.getElementById('quote')
const author = document.getElementById('author')

async function getQuote(url) {
    const response = await fetch(url);
    var data = await response.json();

    console.log(data);

    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}

getQuote(api_url);