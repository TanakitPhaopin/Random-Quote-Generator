const quote_field = document.getElementById("quote");
var button = document.getElementById("button");

var quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "In the middle of every difficulty lies opportunity. - Albert Einstein",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Don't count the days, make the days count. - Muhammad Ali",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "The best way to predict the future is to create it. - Peter Drucker"
];

function newQuote() {
    const randomNumber = Math.floor(Math.random()*(quotes.length));
    var quote = quotes[randomNumber];
    quote_field.innerHTML = quote;
}

function main() {
    button.addEventListener('click', function() {
        newQuote();
    })
}

main();