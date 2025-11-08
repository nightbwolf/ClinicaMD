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

//código para a área de login
document.getElementById("formLogin").addEventListener("submit", function(event){
    event.preventDefault(); //impede o recarregamento da página

    const User = document.getElementById("User").value;
    const password = document.getElementById("Password").value;

    //busca de arquivos Json (fetch)

    fetch("login.json")
        .then(response =>{
            if(!response.ok){
                throw new Error("errp ao carregar dados de usuários");
        }
        return response.json();
    });

        .then(usuarios =>{
            //procura o User correspondente
            const UserEncontrado = usuarios.find(
                u => u.User === email && u.password === senha
            );
            if (usuarioEncontrado){
                msg.textContent = 'bem vindo, ${usuarioEncontrado.User}!';
                msg.style.color = "green";

                //armazena o usuario logado no localStorage
                localStorage.setItem("usuarioLogado", JSON.stringify(usuarioEncontrado));
                
            }
            else{
                msg.textContent = "Usuário ou senha incorretos.";
                msg.style.color = "red";
            }

            .catch(error=>{
                msg.textContent = error.message;
                msg.style.color = "red";
            });
        });
});