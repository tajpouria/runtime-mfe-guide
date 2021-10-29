function mount(el) {
  el.innerHTML = `You have ${require("faker").datatype.number({
    min: 10,
    max: 50,
  })} Items in your card.`;
}

if (process.env.NODE_ENV === "development") {
  const el = document.getElementById("card-root");
  if (el) {
    mount(el);
  }
}

module.exports = { mount };
