document.addEventListener("DOMContentLoaded", () => {
    // Captura o tbody da tabela
    const tabela = document.querySelector("#tabelaClientes tbody");

    if (!tabela) {
        console.error("Tabela não encontrada!");
        return;
    }

    // Recupera a lista de cadastros do localStorage
    const listaCadastros = JSON.parse(localStorage.getItem("cadastrosClientes")) || [];

    // Função para preencher a tabela
    function preencherTabela() {
        tabela.innerHTML = ""; // limpa a tabela

        listaCadastros.forEach((cadastro) => {
            const linha = tabela.insertRow();
            linha.insertCell(0).textContent = cadastro.nome;
            linha.insertCell(1).textContent = cadastro.contato;
            linha.insertCell(2).textContent = cadastro.email;
            linha.insertCell(3).textContent = cadastro.data;
        });
    }

    // Preenche automaticamente ao abrir a página
    preencherTabela();
});
