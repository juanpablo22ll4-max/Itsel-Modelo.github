// modal
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".img").forEach(img=>{
  img.addEventListener("click", ()=>{
    modal.style.display="flex";
    modalImg.src = img.src;
  });
});

closeBtn.onclick = ()=> modal.style.display="none";

// scroll reveal
window.addEventListener("scroll", ()=>{
  document.querySelectorAll(".reveal").forEach(el=>{
    const top = el.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      el.classList.add("active");
    }
  });
});