// ========== ADMIN MODULE ==========

// LOAD VENDOR REQUESTS
function loadVendorRequests(){
  let req = JSON.parse(localStorage.getItem("requests")) || [];
  let div = document.getElementById("reqList");

  div.innerHTML = "";

  req.forEach(r=>{
    let vendor = users.find(u => u.id == r.vendorId);
    div.innerHTML += `
      <div class="card">
        <p><b>Vendor:</b> ${vendor?.name || "Unknown"}</p>
        <p><b>Item:</b> ${r.itemName}</p>
      </div>
    `;
  });

  if(!req.length){
    div.innerHTML = "<p>No vendor requests available.</p>";
  }
}


// LOAD USER REQUESTS
function loadUserRequests(){
  let req = JSON.parse(localStorage.getItem("user_req")) || [];
  let div = document.getElementById("reqList");

  div.innerHTML = "";

  req.forEach(r=>{
    let user = users.find(u => u.id === r.userId);
    div.innerHTML += `
      <div class="card">
        <p><b>User:</b> ${user?.name || "User"}</p>
        <p><b>Request:</b> ${r.req}</p>
      </div>
    `;
  });

  if(!req.length){
    div.innerHTML = "<p>No user requests available.</p>";
  }
}
