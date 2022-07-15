export function scrollStartPage() {
  const ms = 1000;

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "auto",
  });
}