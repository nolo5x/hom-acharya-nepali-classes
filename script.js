
/* ===== MOBILE NAVIGATION ===== */

document.addEventListener("DOMContentLoaded", () => {

  const menuButton =
    document.querySelector(".menu-toggle");

  const navigation =
    document.querySelector(".nav-links");

  if (!menuButton || !navigation) return;

  function closeMenu() {
    navigation.classList.remove("active");

    menuButton.setAttribute(
      "aria-expanded", "false"
    );

    menuButton.setAttribute(
      "aria-label", "Open navigation menu"
    );
  }

  menuButton.addEventListener("click", () => {

    const isOpen =
      navigation.classList.toggle("active");

    menuButton.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

    menuButton.setAttribute(
      "aria-label",
      isOpen
        ? "Close navigation menu"
        : "Open navigation menu"
    );

  });

  // Close menu when a link is selected.
  navigation.querySelectorAll("a")
    .forEach(link => {
      link.addEventListener("click", closeMenu);
    });

  // Close menu with Escape key.
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  // Reset menu when returning to desktop width.
  window.addEventListener("resize", () => {
    if (window.innerWidth > 1000) {
      closeMenu();
    }
  });

});
