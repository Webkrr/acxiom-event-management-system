// ========== VENDOR MODULE ==========

// load vendor transactions
function loadVendorTransactions(){
  let vendor = JSON.parse(localStorage.getItem("activeUser"));
  let div = document.getElementById("txnList");

  div.innerHTML = "";

  let myOrders = orders.filter(o => o.vendorId == vendor.id);

  myOrders.forEach(o=>{
    div.innerHTML += `
      <div class="card">
        <p><b>User:</b> ${o.userName}</p>
        <p><b>Total:</b> ₹${o.total}</p>
        <p><b>Status:</b> ${o.status}</p>
      </div>
    `;
  });

  if(!myOrders.length){
    div.innerHTML = "<p>No transactions found.</p>";
  }
}


// delete product list
function loadDeleteList(){
  let vendor = JSON.parse(localStorage.getItem("activeUser"));
  let div = document.getElementById("deleteList");

  div.innerHTML = "";

  let list = products.filter(p => p.vendorId == vendor.id);

  list.forEach(p=>{
    div.innerHTML += `
      <div class="card">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button class="btn" onclick="deleteProduct('${p.id}')">Delete</button>
      </div>
    `;
  });

  if(!list.length){
    div.innerHTML = "<p>No items added.</p>";
  }
}


// delete product
function deleteProduct(id){
  products = products.filter(p => p.id !== id);
  saveAll();
  loadDeleteList();
}
