document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded and parsed");
  initApp();
});

const initApp = () => {
  const footer = document.getElementById("footerDate");
  const year = new Date().getFullYear();
  footer.textContent = year;

  // Header
  const header = document.querySelector("header");

  const hamIcon = document.querySelector("#ham-icon");
  let faBars = "fa-bars";
  let faXmark = "fa-xmark";
  const ul = document.querySelector(".header__ul");
  const i = hamIcon.lastElementChild;

  hamIcon.addEventListener("click", () =>
    toggleSidebar(faBars, faXmark, ul, i)
  );

  // Scroll
  window.addEventListener("scroll", () => handleScroll(header));
};

const toggleSidebar = (faBars, faXmark, ul, i) => {
  i.classList.toggle(faBars);
  i.classList.toggle(faXmark);

  ul.classList.toggle("header__ul--show");
  ul.classList.toggle("header__ul--hidden");
};

const handleScroll = (header) => {
  if (window.scrollY > 50) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
};
