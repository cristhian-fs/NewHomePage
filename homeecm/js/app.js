//TROCA DE VÍDEOS FEEDBACKS

const feedbackItem = document.querySelectorAll(".feedbackItem");
const feedbackThumb = document.querySelectorAll(".feedbackVideoThumb");

function handleVideo(index) {
  feedbackItem.forEach((buttonItem, itemIndex) => {
    buttonItem.classList.toggle("active", itemIndex === index);
  });
  feedbackThumb.forEach((thumb, thumbIndex) => {
    thumb.classList.toggle("videoAtivo", thumbIndex === index);
  });
}

handleVideo(0);

feedbackItem.forEach((button, index) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    handleVideo(index);
  });
});

//ANIMAÇÕES GSAP

gsap.registerPlugin(ScrollTrigger);

const laptopFull = document.querySelector(".laptopSection");
const laptopTela = document.querySelector(".telaLaptop");
const imagemTela = document.querySelector(".conteudoImage");

const placasContainer = document.querySelector(".experienciaUnica");
const placasDiv = document.querySelector(".placas");
const imgPlacas = document.querySelectorAll(".imgPlaca");

imgPlacas.forEach((imgPlaca, index) => {
  // Crie uma animação para cada imagem de placa
  gsap.from(imgPlaca, {
    y: 250,
    duration: 1,
    stagger: { each: 0.5 },
    scrollTrigger: {
      trigger: placasContainer, // O gatilho é a div .placas
      start: "top 75%",
      end: "top 40%",
      scrub: true,
    },
  });
});