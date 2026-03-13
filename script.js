let addcart = document.querySelectorAll(".Product button");
let box = document.querySelector(".box");
let total = 0;

let shoppingcart = document.createElement("h1");
shoppingcart.textContent = "Shopping Cart";
shoppingcart.classList.add("cart-title");

let cartitems = document.createElement("div");
cartitems.id = "cartItems";

let buyButton = document.createElement("button");
buyButton.textContent = "Place order";
buyButton.classList.add("buy");

let totalDiv = document.createElement("div");
totalDiv.id = "totalDiv";

let success = document.createElement("p");
success.textContent = "Your order has been placed successfully";
success.classList.add("success");

let cartcreated = false;

addcart.forEach(function (button) {
  button.addEventListener("click", function () {
    if (success.parentElement) {
      success.remove();
    }
    let product = button.parentElement;
    let name = product.querySelector("p").textContent;
    let price = product.querySelector("span").textContent;

    price = parseFloat(price.replace("$", ""));
    total += price;

    if (!cartcreated) {
      box.appendChild(shoppingcart);
      box.appendChild(cartitems);
      box.appendChild(totalDiv);
      box.appendChild(buyButton);
      cartcreated = true;
    }

    let item = document.createElement("p");
    item.textContent = name;
    cartitems.appendChild(item);

    totalDiv.textContent = `Total : $${total.toFixed(2)}`;
  });
});

buyButton.addEventListener("click", function () {
  box.appendChild(success);

  cartitems.innerHTML = "";
  total = 0;
  totalDiv.textContent = "";
  cartcreated = false;

  shoppingcart.remove();
  cartitems.remove();
  totalDiv.remove();
  buyButton.remove();
});
