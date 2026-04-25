const modal = document.getElementById('modal');
const overlay = document.getElementById('overlay');
const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');
const clickBtn = document.getElementById('clickBtn');

function openModal() {
  modal.classList.add('open');
  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
}
function closeModal() {
  modal.classList.remove('open');
  overlay.classList.remove("active");
  document.body.style.overflow = "";
}

openBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

clickBtn.addEventListener("click", () => {
  alert("Smartz welcome you!");
  closeModal();
});