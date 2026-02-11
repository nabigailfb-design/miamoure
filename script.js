let currentPage = 1;

function goToPage(pageNumber){
  const current = document.getElementById(`page${currentPage}`);
  const next = document.getElementById(`page${pageNumber}`);

  // Animación de pasar página
  current.classList.remove("active");
  current.classList.add("flipped");

  // Pequeño delay para que se sienta como página
  setTimeout(() => {
    next.classList.add("active");
    currentPage = pageNumber;
  }, 250);
}

function noAnswer(){
  const yesBtn = document.getElementById("yesBtn");
  yesBtn.classList.add("big-yes");
}

function yesAnswer(){
  goToPage(3);
}
