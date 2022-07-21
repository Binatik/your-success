export function scrollStartPage() {
  const ms = 100;

  setTimeout(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, ms);
}
