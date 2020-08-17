//check to see if service worker is supported
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./serviceWorker.js")
      .then((reg) => console.log("sucess"))
      .catch((err) => console.log(`Service Worker Error: ${err}`));
  });
}
