//captura dos elementos no html
const nomeInput = document.getElementById("nome");
const emailInput = document.getElementById("email");
const contatoInput = document.getElementById("contato");
const dataInput = document.getElementById("data");
const form = document.querySelector(".form-cadastro")
const salvarBtn = document.getElementById("salvar");


//função de validação
function validarCampos(){
    if(!nomeInput.value||!contatoInput.value||!emailInput.value||!dataInput.value){
        alert("Por Favor, preencha os campos obrigatórios");
        return false;
    }
    return true;
}
//objeto de cadastro declarado fora do if para recuperar dados para outras páginas
let cadastro = {};

//evento de envio do formulário
form.addEventListener("submit", (event)=>{
    event.preventDefault(); //Evita recarregar a página.

    if(validarCampos()){
        const cadastro = {
        nome:nomeInput.value.trim(),
        email:emailInput.value.trim(),
        contato:contatoInput.value.trim(),
        data:dataInput.value,
        };
    };

    //exibe no console do navegador(f12)
    console.log("cadastro realizado com sucesso!");
    console.log(cadastro);

    let listaCadastros = JSON.parse(localStorage.getItem("cadastrosClientes"))||[];

    listaCadastros.push(cadastro);

    //salva no armazenamento locado do navegador
    localStorage.setItem("cadastroCliente", JSON.stringify(cadastro));

    alert("cadastro salvo com sucesso!");
    form.reset();
});

document.getElementById("limpar").addEventListener("click", ()=>{
    form.reset();
    console.log("formulário limpo");
});

salvarBtn.addEventListener("click", () =>{
    cadastro.nome = nomeInput.value;
    cadastro.email = emailInput.value;
    cadastro.contato= contatoInput.value;
    cadastro.data = dataInput.value;
    
    if (cadastro.nome && cadastro.email){
        console.log("cadastro salvo com sucesso!");
        console.log(cadastro);
    }
    else{
        console.error("erro: preencha todos os campos obrigatórios!");

    }
});