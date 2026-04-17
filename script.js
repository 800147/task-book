const isSafari = () =>
  /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

if (isSafari()) {
  document.querySelectorAll(".DownloadButton a").forEach((a) => {
    a.addEventListener("click", (e) => {
      e.preventDefault();

      window.open(e.target.href, "_blank");
    });
  });
}
