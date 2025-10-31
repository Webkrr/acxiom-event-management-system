// ====== CART MODULE ======

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Load Cart
function loadCart() {
  let div = document.getElementById("cartList");
  let total = 0;
  div.innerHTML = "";

  if (cart.length === 0) {
    div.innerHTML = "<p>No items in cart</p>";
    document.getElementById("grandTotal").innerText = 0;
    return;
  }

  cart.forEach(item => {
    let t = item.price * item.qty;
    total += t;

    div.innerHTML += `
      <div class="card">
        <p><b>${item.name}</b></p>
        <p>Price: ₹${item.price}</p>

        <p>
          Qty:
          <button class="btn-small" onclick="decreaseQty('${item.id}')">−</button>
          <span>${item.qty}</span>
          <button class="btn-small" onclick="increaseQty('${item.id}')">+</button>
        </p>

        <p>Total: ₹${t}</p>

        <button class="btn-remove" onclick="removeFromCart('${item.id}')">Remove</button>
      </div>
    `;
  });

  document.getElementById("grandTotal").innerText = total;
}


// Increase quantity
function increaseQty(id) {
  cart = cart.map(item => {
    if (item.id === id) {
      item.qty++;
    }
    return item;
  });

  saveCart();
  loadCart();
}


// Decrease quantity
function decreaseQty(id) {
  cart = cart.map(item => {
    if (item.id === id) {
      if (item.qty > 1) item.qty--;
    }
    return item;
  });

  saveCart();
  loadCart();
}


// Remove a single item
function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  saveCart();
  loadCart();
}


// Clear entire cart
function clearCart() {
  if (!confirm("Clear all items?")) return;
  cart = [];
  saveCart();
  loadCart();
}
