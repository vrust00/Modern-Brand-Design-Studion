const menu_button = document.querySelector("#menu-button");
const menu_bar = document.querySelector("#menu-bar");
menu_button.addEventListener( 'click', () => {
      

    
      if (menu_bar.classList.contains("hide")) {
      menu_bar.classList.remove("hide");
      } else if (window.innerWidth < 799) {
      menu_bar.classList.add("hide");
      }
            

   
});   

window.addEventListener("resize", () => {
      menu_bar.classList.add("hide");
})