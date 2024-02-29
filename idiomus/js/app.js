window.addEventListener("load", function () {
  var swiper = new Swiper(".swiper", {
    slidesPerView: "auto",
    spaceBetween: 32,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      type: "progressbar",
    },
    navigation: {
      nextEl: ".button-next",
      prevEl: ".button-prev",
    },
  });

  gsap.registerPlugin("ScrollTrigger");

  const imgs = document.querySelectorAll(".imgs-modules img");
  const modules = document.getElementById("modules");

  ScrollTrigger.create({
    trigger: modules,
    endTrigger: "body",
    start: "top 60%",
    onEnter: () => {
      imgs.forEach((imagem) => {
        imagem.classList.add("ativo");
      });
    },
  });

  const grafico = document.querySelector(".graph-2");
  const sectionGraph = document.querySelector(".graph");

  if (grafico && sectionGraph) {
    const bar1 = grafico.querySelector(".bluebar-1");
    const bar2 = grafico.querySelector(".bluebar-2");
    const bar3 = grafico.querySelector(".bluebar-3");
    const bar4 = grafico.querySelector(".bluebar-4");
    const bar5 = grafico.querySelector(".greenbar-1");
    const bar6 = grafico.querySelector(".greenbar-2");
    const bar7 = grafico.querySelector(".greenbar-3");
    const bar8 = grafico.querySelector(".greenbar-4");
    const bars = [bar1, bar2, bar3, bar4, bar5, bar6, bar7, bar8];

    console.log(bars);

    ScrollTrigger.create({
      trigger: sectionGraph,
      endTrigger: "body",
      start: "top 60%",
      markers: false,
      onEnter: () => {
        addGraphClasses();
      },
    });

    function addGraphClasses() {
      bar1.classList.add("graph-active");
      bar2.classList.add("graph-active");
      bar3.classList.add("graph-active");
      bar4.classList.add("graph-active");
      bar5.classList.add("graph-active");
      bar6.classList.add("graph-active");
      bar7.classList.add("graph-active");
      bar8.classList.add("graph-active");
    }
  } else {
    console.log("Elementos não encontrados no DOM.");
  }
});

//SALVANDO ANIMAÇÃO
ScrollTrigger.create({
  trigger: sectionText,
  start: "top top",
  end: "bottom top",
  markers: true,
  pin: sectionText, // Fixa a sectionText na tela durante a animação
});

// Configuração do scrollTrigger para animação de opacidade do txtFirst
ScrollTrigger.create({
  trigger: txtFirst,
  start: "top 20%",
  end: "+=150px",
  markers: true,
  scrub: true,
  onEnter: () => {
    txtFirst.classList.add("opacity");
  },
  onEnterBack: () => {
    txtFirst.classList.remove("opacity");
  },
});

gsap.to(txtFirst, {
  scale: 150,
  translate: "-1000px",
  scrollTrigger: {
    trigger: body,
    start: "+=500px",
    end: "+=2000px",
    markers: true,
    scrub: true,
  },
});

ScrollTrigger.create({
  trigger: txtFirst,
  start: "top 20%",
  end: () => "+=" + (txtFirst.offsetHeight + 2000),
  scrub: true,
  onUpdate: (e) => {
    const progress = e.progress; // Progresso da animação de escala e translate
    const scale = 1 + progress * 1.5; // Ajuste a escala conforme o progresso (150% de aumento)
    const translateX = -1000 * progress; // Ajuste o translate conforme o progresso
    gsap.to(txtFirst, { scale, x: translateX, duration: 0.1 });
  },
});
