document.addEventListener("DOMContentLoaded", () => {
    const favoriteIcons = document.querySelectorAll(".favorite");
  
    favoriteIcons.forEach((icon, index) => {
      if (index === 0) {
        icon.classList.add("filled");
      }
  
      icon.addEventListener("click", () => {
        icon.classList.toggle("filled");
      });
    });
  });
  