const photoContainer = document.querySelector('.photo-container');
const nextBtn = document.querySelector('.btn_next');
const sliderLine = document.querySelector('.slider-line');
const images = document.querySelectorAll('.image');

// Fullscreen option

const fullscreenBtn = document.querySelector(".fullscreen");

fullscreenBtn.addEventListener("click", () => toggleFullScreen() && toggleFullScreenIcn());

const toggleFullScreen = () => document.fullscreenElement
  ? document.exitFullscreen()
  : document.documentElement.requestFullscreen();

const toggleFullScreenIcn = () =>
  fullscreenBtn.childNodes[1].outerHTML === '<img src="assets/icons/open-fullscreen.svg">'
    ? fullscreenBtn.childNodes[1].outerHTML = '<img src="assets/icons/close-fullscreen.svg">'
    : fullscreenBtn.childNodes[1].outerHTML = '<img src="assets/icons/open-fullscreen.svg">';

// Loader

// const fileInput = document.querySelector('input[type="file"]');

// fileInput.addEventListener('change', function (e) {
//   const actualFile = fileInput.files[0];
//   const reader = new FileReader();
//   reader.onload = () => {
//     const img = new Image();
//     img.src = reader.result;
//     sliderLine.innerHTML = "";
//     sliderLine.append(img);
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

// Slider

let offset = 0;

nextBtn.addEventListener('click', nextPhoto);

function nextPhoto() {
  offset += 50;
  if (offset > (images.length - 1) * 50) {
    offset = 0;
  }
  sliderLine.style.left = -offset + 'vw';
}
