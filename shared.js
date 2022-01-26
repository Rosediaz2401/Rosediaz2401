/*let backdrop = document.querySelector(".backdrop");
let modal = document.querySelector(".modal");
let modalNoButton = document.querySelector(".modal__action--negative");
let selectPlanButtons = document.querySelectorAll(".plan button");
let toggleButton = document.querySelector('.toggle-button');
let mobileNav = document.querySelector('.mobile-nav');

console.dir(backdrop);
for (let i = 0; i < selectPlanButtons.length; i++) {
selectPlanButtons[i].addEventListener("click", function() {
modal.style.display = "block";
backdrop.style.display = "block";
 });
}

backdrop.addEventListener("click", function() {
    mobileNav.style.display = 'none';
    closeModal();
});

modalNoButton.addEventListener("click", closeModal());

function closeModal() {
  backdrop.style.display = "none";
  modal.style.display = "none";
}

toggleButton.addEventListener('click', function() {
    mobileNav.style.display = 'block';
    backdrop.style.display = 'block';
});*/

/*const button =document.querySelector('.logo'),
      menu =document.querySelector('.mobile-nav');

      button.addEventListener('click', (e) =>{
          menu.classList.toggle('.main-nav__items');
          document.body.classList.toggle('.mobile-nav');
      })
      
           export default function hamburgerMenu(panelBtn,panel,menuLink){
        const d=document;
        
        d.addEventListener("click",(e)=>{
            if(e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)){
                d.querySelector(panel).classList.toggle("is-active");
                d.querySelector(panelBtn).classList.toggle("is-active");
            }
        
            if(e.target.matches(menuLink)){
                d.querySelector(panel).classList.remove("is-active");
                d.querySelector(panelBtn).classList.remove("is-active")
            }
        });
      }
      */

      const nav= document.querySelector(".mobile-nav")

      document.querySelector(".hamburger").addEventListener("click", e =>{
        e.preventDefault()
        if(nav.classList.contains("open")){
          nav.classList.remove("open")
        } else {
          nav.classList.add("open")
        }
      })

