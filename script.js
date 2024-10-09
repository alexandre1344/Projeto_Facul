// Simula uma base de dados de produtos (ou pode ser atualizado para vir de um backend)
const products = [
    { id: 1, name: "Produto 1", description: "Descrição completa do produto 1" },
    { id: 2, name: "Produto 2", description: "Descrição completa do produto 2" }
];

// Exibe os detalhes do produto
function showDetails(productId) {
    const product = products.find(prod => prod.id === productId);
    if (product) {
        document.getElementById("details").innerText = product.description;
        document.getElementById("product-details").style.display = "block";
    }
}

// Função para adicionar ao carrinho (simulação)
function addToCart() {
    alert("Produto adicionado ao carrinho!");
}
