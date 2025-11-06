// parceiro.js

// Captura o tbody da tabela
const tabelaElement = document.getElementById("tabelaClientes");
if (tabelaElement) {
    const tabela = tabelaElement.querySelector("tbody");

    // Recupera a lista de cadastros do localStorage
    let listaCadastros = JSON.parse(localStorage.getItem("cadastrosClientes")) || [];

    // Função para preencher a tabela
    function preencherTabela() {
        tabela.innerHTML = ""; // limpa tabela
        listaCadastros.forEach(cadastro => {
            const linha = tabela.insertRow();
            linha.insertCell(0).textContent = cadastro.nome;
            linha.insertCell(1).textContent = cadastro.contato;
            linha.insertCell(2).textContent = cadastro.email;
            linha.insertCell(3).textContent = cadastro.data;
        });
    }

    // Chama a função quando a página carregar
    window.addEventListener("load", preencherTabela);
}
