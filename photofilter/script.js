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