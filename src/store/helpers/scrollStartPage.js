export function scrollStartPage() {
  const ms = 1500;

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "auto",
  });

  document.body.classList.add("scrollHidden");

  setTimeout(() => {
    document.body.classList.remove("scrollHidden");
  }, ms);
}