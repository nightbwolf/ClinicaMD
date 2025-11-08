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

// código para a área de login
document.getElementById("formLogin").addEventListener("submit", function(event){
    event.preventDefault(); // impede o recarregamento da página

    const User = document.getElementById("User").value.trim();
    const Password = document.getElementById("Password").value.trim(); // corrigido: ID "Password" com P maiúsculo
    const msg = document.getElementById("mensagem");
    
    // busca de arquivos JSON (fetch)
    fetch("../config/login.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro ao carregar dados de usuários");
            }
            return response.json(); // converte o JSON em objeto JS
        })
        .then(usuarios => {
            // procura o User correspondente
            const usuarioEncontrado = usuarios.find(
                u => u.User === User && u.Password.toString() === Password
            );
            
            if (usuarioEncontrado) {
                // armazena o usuário logado no localStorage
                localStorage.setItem("usuarioLogado", JSON.stringify(usuarioEncontrado)); 
                
                msg.textContent = "Login bem-sucedido! Redirecionando...";
                msg.style.color = "green";

                // redireciona para a área do parceiro
                setTimeout(() => {
                    window.location.href = "areadoparceiro.html";
                }, 1000);   
            } else {
                msg.textContent = "Usuário ou senha incorretos.";
                msg.style.color = "red";
            }
        })
        .catch(error => {
            msg.textContent = error.message;
            msg.style.color = "red";
        });
});


