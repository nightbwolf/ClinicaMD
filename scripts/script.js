document.addEventListener("DOMContentLoaded", ()=>{
    const form = document.querySelector(".form-cadastro");

    if (!form){
        console.error("Formulário de cadastro não encontrado!");
        return;
    }

    form.addEventListener("submit", (event) =>{
        event.preventDefault(); //impede o recarregamento da página

        const nome = document.getElementById("nome").value.trim();
        const contato = document.getElementById("contato").value.trim();
        const email = document.getElementById("email").value.trim();
        const data = document.getElementById("data").value;

        if(!nome||!contato||!email||!data){
            alert("por favor, preencha todos os campos!");
            return;
        }

        //cria o objeto de cadastro
        const novoCadastro = {nome, contato, email, data};
        
        //recupera lista existente(ou cria uma nova)
        let listaCadastros = JSON.parse(localStorage.getItem("cadastrosClientes")) || [];
    
        listaCadastros.push(novoCadastro);

        localStorage.setItem("cadastrosClientes", JSON.stringify(listaCadastros));

        form.reset();
        
        alert("cadastro salvo com sucesso!")
    });

});