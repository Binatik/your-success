export function scrollStartPage() {
  const ms = 500;

  setTimeout(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, ms);
}
