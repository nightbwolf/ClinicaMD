// Menu mobile toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

//seletor de área do parceiro
document.getElementById("areaParceiro").addEventListener("click", function(){
    window.location.href ="../html/parceiro/login.html";
});

//seletor do auto cadastro
document.getElementById("autoCadastro").addEventListener("click",function(){
    window.location.href = "../html/cadastro.html";
});
 
//seletor página principal
document.getElementById("inicio").addEventListener("click", function(){
    window.location.href = "index.html";
});

// Fechar menu ao clicar em um link
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Animação de entrada in rolling
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observar elementos
document.querySelectorAll('.especialidade-card, .procedimento-card').forEach(el => {
    observer.observe(el);
});