const { mount: productsMount } = require("products/ProductsShow");
const { mount: cardMount } = require("card/CardShow");

productsMount(document.getElementById("my-products"));
cardMount(document.getElementById("my-card"));
