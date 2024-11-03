// Exemplo de citações
const quotes = [
    { text: "Nada é permanente, exceto a mudança.", author: "Heráclito de Éfeso" },
    { text: "O homem é o lobo do homem.", author: "Thomas Hobbes" },
    { text: "A missão suprema do homem é saber o que precisa para ser homem.", author: "Immanuel Kant" },
    { text: "Penso, logo existo.", author: "René Descartes" },
    {text: "Aquilo que se faz por amor está sempre além do bem e do mal.", author: "Friedrich Nietzsche"},
    {text: "Só há um caminho para a felicidade. Não nos preocuparmos com coisas que ultrapassam o poder da nossa vontade.", author: "Épicuro"},
    {text: "Exige muito de ti e espera pouco dos outros. Assim, evitarás muitos aborrecimentos.", author: "Confúncio"},
    {text: "Acredite em milagres, mas não dependa deles.", author: "Immanuel Kant"},
    {text: "Conhece-te a ti mesmo e conhecerás o universo e os deuses.", author: "Sócrates"}
];

// Função para obter uma citação aleatória
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

// Atualiza a citação na tela
function updateQuote() {
    const quote = getRandomQuote();
    document.getElementById('text').textContent = `"${quote.text}"`;
    document.getElementById('author').textContent = `- ${quote.author}`;
    
    // Atualiza o link para tweetar a citação
    const tweetQuote = document.getElementById('tweet-quote');
    tweetQuote.href = `https://twitter.com/intent/tweet?text="${quote.text}" - ${quote.author}`;
}

// Adiciona evento ao botão
document.getElementById('new-quote').addEventListener('click', updateQuote);

// Carrega uma citação aleatória ao iniciar
window.onload = updateQuote;
