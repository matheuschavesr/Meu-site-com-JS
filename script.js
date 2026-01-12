(function () {
    emailjs.init("SUA_PUBLIC_KEY");
})();

const form = document.getElementById("contatoForm");
const statusMensagem = document.getElementById("statusMensagem");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const dados = {
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        mensagem: document.getElementById("mensagem").value
    };

    statusMensagem.style.color = "#fff";
    statusMensagem.textContent = "Enviando mensagem...";

    emailjs.send("SEU_SERVICE_ID", "SEU_TEMPLATE_ID", dados)
        .then(() => {
            statusMensagem.style.color = "lightgreen";
            statusMensagem.textContent = "Mensagem enviada com sucesso!";
            form.reset();
        })
        .catch(() => {
            statusMensagem.style.color = "red";
            statusMensagem.textContent = "Erro ao enviar mensagem.";
        });
});

document.querySelectorAll(".ingredientes li").forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("ativo");
    });
});

document.querySelectorAll(".fotos img").forEach(img => {
    img.addEventListener("click", () => {
        img.classList.toggle("zoom");
    });
});

document.addEventListener("scroll", () => {
  const elements = document.querySelectorAll(".reveal");

  elements.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const visiblePoint = 100;

    if (elementTop < windowHeight - visiblePoint) {
      el.classList.add("active");
    }
  });
});

const header = document.getElementById("mainHeader");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});