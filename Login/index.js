const wrapper = document.querySelector(".wrapper");
const active_btn = document.querySelector(".btnLogin-popup");
const cancel = document.querySelector(".close-icon");
number_click = 1;

active_btn.addEventListener("click", () => {
  wrapper.classList.add("active-popup");
});

cancel.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
});
