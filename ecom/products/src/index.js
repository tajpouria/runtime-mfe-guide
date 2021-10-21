document.getElementById("products-root").innerHTML = Array.from(
  { length: 10 },
  () => `<div>${require("faker").commerce.productName()}</div>`,
).join("");
