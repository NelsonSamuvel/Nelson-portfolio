document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded and parsed");
  initApp();
});

const initApp = () => {
  const footer = document.getElementById("footerDate");
  const year = new Date().getFullYear();
  footer.textContent = year;

  const state = { isOpenSidebar: false };

  // Header
  const header = document.querySelector("header");

  const hamIcon = document.querySelector("#ham-icon");
  let faBars = "fa-bars";
  let faXmark = "fa-xmark";
  const ul = document.querySelector(".header__ul");
  const i = hamIcon.lastElementChild;

  // All navLinks
  const navLists = document.querySelectorAll(".header__ul li a");

  hamIcon.addEventListener("click", () =>
    toggleSidebar(faBars, faXmark, ul, i, state)
  );

  // Scroll
  window.addEventListener("scroll", () => handleScroll(header));

  navLists.forEach((list) => {
    list.addEventListener("click", () => {
      if (state.isOpenSidebar) {
        toggleSidebar(faBars, faXmark, ul, i, state);
      }
    });
  });

  document.addEventListener("click", (e) => {
    handleOutsideClick(e, ul, hamIcon, state);
  });

  const toggleSidebar = (faBars, faXmark, ul, i, state) => {
    i.classList.toggle(faBars);
    i.classList.toggle(faXmark);

    const iconBtn = document.querySelector(".header__icon");

    if (i.classList.contains("fa-xmark")) {
      iconBtn.style.position = "fixed";
      state.isOpenSidebar = true;
    } else {
      iconBtn.style.position = "static";
      state.isOpenSidebar = false;
    }

    ul.classList.toggle("header__ul--show");
    ul.classList.toggle("header__ul--hidden");
  };

  // Scroll functionality
  const handleScroll = (header) => {
    if (window.scrollY > 50) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  };

  // Outside Click
  const handleOutsideClick = (e, ul, hamIcon, state) => {
    // Only close if sidebar is open
    if (!state.isOpenSidebar) return;

    // If clicked outside of both the sidebar and the hamburger icon
    if (!ul.contains(e.target) && !hamIcon.contains(e.target)) {
      toggleSidebar(faBars, faXmark, ul, i, state);
    }
  };
};
