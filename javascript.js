const quotes = [
    {
        content: "La vie, c'est comme une bicyclette, il faut avancer pour ne pas perdre l'équilibre.",
        author: "Albert Einstein"
    },
    {
        content: "Le seul moyen de faire du bon travail est d'aimer ce que vous faites.",
        author: "Steve Jobs"
    },
    {
        content: "Sois le changement que tu veux voir dans le monde.",
        author: "Mahatma Gandhi"
    },
    {
        content: "La simplicité est la sophistication suprême.",
        author: "Léonard de Vinci"
    }
];

const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const newQuoteButton = document.getElementById("new-quote");
const tweetButton = document.getElementById("tweet-quote");
const toggleDarkModeButton = document.getElementById("toggle-dark-mode"); // Déclaration du bouton mode sombre

// Fonction pour générer une citation aléatoire
function getQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    quoteText.textContent = quote.content;
    authorText.textContent = `— ${quote.author}`;
    tweetButton.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote.content}" - ${quote.author}`)}`;
}

// Charger une citation au démarrage
getQuote();

// Nouvelle citation au clic
newQuoteButton.addEventListener("click", getQuote);

// Mode sombre
if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    toggleDarkModeButton.textContent = "Mode clair";
}

toggleDarkModeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
        toggleDarkModeButton.textContent = "Mode clair";
    } else {
        localStorage.setItem("darkMode", "disabled");
        toggleDarkModeButton.textContent = "Mode sombre";
    }
});