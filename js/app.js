document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);
  // accordion function
  const faqButtons = document.querySelectorAll(".faqButton");
  const faqAnswers = document.querySelectorAll(".faqAnswer");

  let index_js;
  faqButtons.forEach((button) => {
    button.addEventListener("click", () => {
      index_js = button.getAttribute("index");
      if (faqAnswers[index_js].classList.contains("active")) {
        button.classList.remove("active");
        faqAnswers[index_js].classList.remove("active");
      } else {
        button.classList.add("active");
        faqAnswers[index_js].classList.add("active");
      }
    });
  });

  // open toggle menu
  const optionsTheme = document.querySelector(".optionsTheme");
  const toggleThemeButton = document.querySelector(".toggleThemeButton");

  gsap.to(optionsTheme, {
    scale: 0,
    pointerEvents: "none",
    transformOrigin: "top right",
  });

  let isOptionsThemeOpen = false;

  // Adiciona um ouvinte de evento de clique ao documento inteiro
  document.addEventListener("click", (event) => {
    // Verifica se o clique ocorreu dentro do optionsTheme
    if (!optionsTheme.contains(event.target) && isOptionsThemeOpen) {
      // Se o clique ocorreu fora do optionsTheme e ele está aberto, fecha-o
      gsap.to(optionsTheme, {
        scale: 0,
        duration: 0.4,
        ease: "power4.out",
        pointerEvents: "none",
      });
      isOptionsThemeOpen = false;
    }
  });

  // Adiciona um ouvinte de evento de clique ao botão de alternância
  toggleThemeButton.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!isOptionsThemeOpen) {
      // Se o optionsTheme não estiver aberto, abra-o
      gsap.to(optionsTheme, {
        scale: 1,
        duration: 0.4,
        ease: "power4.out",
        pointerEvents: "all",
      });
      isOptionsThemeOpen = true;
    } else {
      // Se o optionsTheme estiver aberto, feche-o
      gsap.to(optionsTheme, {
        scale: 0,
        duration: 0.4,
        ease: "power4.out",
        pointerEvents: "none",
      });
      isOptionsThemeOpen = false;
    }
  });

  // THEME LOGIC
  const themeButtons = document.querySelectorAll("[data-theme]");

  if (
    localStorage.getItem("theme") === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  // function to handle by themes
  function handleTheme(selectedTheme) {
    switch (selectedTheme) {
      case "dark":
        localStorage.setItem("theme", "dark");
        document.documentElement.classList.add("dark");
        break;
      case "light":
        localStorage.setItem("theme", "light");
        document.documentElement.classList.remove("dark");
        break;
      case "system":
        localStorage.removeItem("theme");
        document.documentElement.classList.toggle(
          "dark",
          window.matchMedia("(prefers-color-scheme: dark)").matches
        );
        break;
    }
  }
  themeButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      handleTheme(button.getAttribute("data-theme"));
      gsap.to(optionsTheme, {
        scale: 0,
        duration: 0.4,
        ease: "power4.out",
        pointerEvents: "none",
      });
      isOptionsThemeOpen = false;
    });
  });

  // font option logic
  const fontOptionButton = document.querySelector(".textSelection");
  const fontOptions = document.querySelector(".optionsFonts");
  const toggleFont = document.querySelector(".toggleFont");
  const toggleFontButtons = document.querySelectorAll("[data-font-toggle]");
  const figmaUIFontType = document.querySelector(".figmaUIFontType");

  function openFontsOption() {
    fontOptions.classList.toggle("active");
  }
  function closeFontsOption() {
    if (fontOptions.classList.contains("active")) {
      fontOptions.classList.remove("active");
    }
  }

  function toggleFonts(activeFont) {
    figmaUIText = figmaUIFontType.querySelector("tspan");
    switch (activeFont) {
      case "HelveticaNowDisplay":
        toggleFont.style.fontFamily = "HelveticaNowDisplay";
        figmaUIText.textContent = "Helvetica Now Display";
        figmaUIFontType.setAttribute("font-family", "HelveticaNowDisplay");
        break;
      case "Sora":
        toggleFont.style.fontFamily = "Sora";
        figmaUIText.textContent = "Sora";
        figmaUIFontType.setAttribute("font-family", "Sora");
        break;
      case "DMSans":
        toggleFont.style.fontFamily = "DMSans";
        figmaUIText.textContent = "DM Sans";
        figmaUIFontType.setAttribute("font-family", "DMSans");
        break;
      case "Inter":
        toggleFont.style.fontFamily = "Inter";
        figmaUIText.textContent = "Inter";
        figmaUIFontType.setAttribute("font-family", "Inter");
        break;
      case "Raleway":
        toggleFont.style.fontFamily = "Raleway";
        figmaUIText.textContent = "Raleway";
        figmaUIFontType.setAttribute("font-family", "Raleway");
        break;
      default:
        toggleFont.style.fontFamily = "HelveticaNowDisplay";
        figmaUIText.textContent = "Helvetica Now Display";
        figmaUIFontType.setAttribute("font-family", "HelveticaNowDisplay");
        break;
    }
  }

  if (fontOptionButton) {
    fontOptionButton.addEventListener("click", () => {
      openFontsOption();
    });
  }

  toggleFontButtons.forEach((button) => {
    button.addEventListener("click", () => {
      toggleFonts(button.getAttribute("data-font-toggle"));
      closeFontsOption();
    });
  });

  // handleling colors

  const inputColor = document.querySelector(".colorinput");
  const labelColor = document.querySelector(".colorInputText");
  let selectedColor = inputColor.getAttribute("value");

  labelColor.textContent = inputColor.getAttribute("value");

  inputColor.addEventListener("input", (e) => {
    labelColor.textContent = inputColor.value;
    toggleFont.style.color = inputColor.value;
  });

  inputColor.addEventListener("change", (e) => {
    labelColor.textContent = e.target.value;
    toggleFont.style.color = e.target.value;
  });

  // SCROLLTRIGGER ANIMATIONS

  const loadingBar = document.querySelector(".barWhite");
  const figmaLoadingScreen = document.querySelector(".figmaLoadingScreen");
  const figmaPinWrapper = document.querySelector(".figmaPinWrapper");

  const section02 = document.querySelector(".section02");
  const arrowS2 = document.querySelector(".arrow-s2-anim");

  let mm = gsap.matchMedia();

  mm.add("(min-width: 767px)", () => {
    let tlFigma = gsap.timeline({
      scrollTrigger: {
        trigger: figmaPinWrapper,
        start: "top top",
        end: "+=" + 3 * window.innerHeight + "px",
        scrub: 1,
        pin: figmaPinWrapper,
      },
    });

    tlFigma.fromTo(
      loadingBar,
      {
        scaleX: 0,
      },
      {
        scaleX: 1,
        transformOrigin: "top left",
        duration: 0.5,
        ease: "none",
      }
    );

    tlFigma.to(
      figmaLoadingScreen,
      {
        opacity: 0,
        duration: 0.5,
      },
      "-=0.1"
    );

    tlFigma.fromTo(
      ".section02 > div",
      {
        opacity: 0,
        filter: "blur(8px)",
        y: 40,
      },
      {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        duration: 0.5,
        stagger: { each: 0.1 },
        ease: "none",
      },
      "-=0.2"
    );

    tlFigma.fromTo(
      figmaPinWrapper,
      {
        scale: 0.7,
      },
      {
        scale: 1,
        duration: 0.5,
        ease: "none",
      },
      "-=1"
    );

    tlFigma.add(() => {}, "+=0.5");
  });

  section02.addEventListener("mousemove", (e) => {
    const x = e.clientX - arrowS2.offsetWidth / 2,
      y = e.clientY - arrowS2.offsetHeight / 2;

    const keyframes = {
      transform: `translate(${x}px, ${y}px)`,
    };
    arrowS2.animate(keyframes, {
      duration: 2000,
      fill: "forwards",
      easing: "ease",
    });
  });

  const mouseFollowBtns = document.querySelectorAll(".mouseFollowBtn");

  mouseFollowBtns.forEach((button) => {
    button.addEventListener("mousemove", (e) => {
      const scaleFactor = 0.08; // Fator de escala para ajustar a sensibilidade do movimento
      const mouseX = e.clientX - e.target.getBoundingClientRect().left; // Posição do mouse em relação ao botão
      const mouseY = e.clientY - e.target.getBoundingClientRect().top;
      const translateX = (mouseX - e.target.offsetWidth / 2) * scaleFactor; // Ajuste de escala para o movimento
      const translateY = (mouseY - e.target.offsetHeight / 2) * scaleFactor;

      requestAnimationFrame(() => {
        button.style.transform = `translate(${translateX}px, ${translateY}px)`;
      });
    });

    button.addEventListener("mouseleave", (e) => {
      gsap.to(button, {
        x: 0,
        y: 0,
        duration: 0.2,
        ease: "power1.out",
      });
    });
  });
});
window.addEventListener("load", () => {
  ScrollTrigger.refresh();
});
window.addEventListener("resize", () => {
  ScrollTrigger.refresh();
});
window.addEventListener("orientationchange", function () {
  ScrollTrigger.refresh();
});
