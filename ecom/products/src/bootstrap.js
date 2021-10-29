function mount(el) {
  el.innerHTML = Array.from(
    { length: 10 },
    () => `<div>${require("faker").commerce.productName()}</div>`,
  ).join("");
}

if (process.env.NODE_ENV === "development") {
  const el = document.getElementById("products-root");
  if (el) {
    mount(el);
  }
}

module.exports = { mount };
