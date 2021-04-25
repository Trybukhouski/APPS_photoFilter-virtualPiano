const fullscreenBtn = document.querySelector(".fullscreen");

// Fullscreen option

fullscreenBtn.addEventListener("click", () => toggleFullScreen() && toggleFullScreenIcn());

const toggleFullScreen = () => document.fullscreenElement
  ? document.exitFullscreen()
  : document.documentElement.requestFullscreen();

const toggleFullScreenIcn = () =>
  fullscreenBtn.childNodes[1].outerHTML === '<img src="assets/icons/open-fullscreen.svg">'
    ? fullscreenBtn.childNodes[1].outerHTML = '<img src="assets/icons/close-fullscreen.svg">'
    : fullscreenBtn.childNodes[1].outerHTML = '<img src="assets/icons/open-fullscreen.svg">';

// // Loader

// const fileInput = document.querySelector('input[type="file"]');
// const photoContainer = document.querySelector('.photo-container');

// fileInput.addEventListener('change', function (e) {
//   const actualFile = fileInput.files[0];
//   const reader = new FileReader();
//   reader.onload = () => {
//     const img = new Image();
//     img.src = reader.result;
//     photoContainer.innerHTML = "";
//     photoContainer.append(img);
//   }
//   reader.readAsDataURL(actualFile);
// });

// Photo-redactor

let controls = document.querySelector('.photo-redactor');
let inputs = controls.querySelectorAll('.photo-redactor input');

function handleUpdate() {
  const sizeType = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + sizeType);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
