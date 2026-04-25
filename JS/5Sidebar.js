const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");

function openSidebar(){
  sidebar.classList.add("open");
  overlay.classList.add("active");
}

function closeSidebar(){
  sidebar.classList.remove("open");
  overlay.classList.remove("active");
}

openBtn.addEventListener("click", openSidebar);
closebtn.addEventListener("click", closeSidebar);
overlay.addEventListener("click", closeSidebar);
