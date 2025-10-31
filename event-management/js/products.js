
function addProduct(nId,pId,iId){
  const name=document.getElementById(nId).value.trim();
  const price=parseFloat(document.getElementById(pId).value);
  const image=document.getElementById(iId).value.trim();
  if(!name||!price) return alert("Name & Price required");
  const vendor=JSON.parse(localStorage.getItem('activeUser'));
  products.push({id:generateId(),vendorId:vendor.id,name,price,image});
  saveAll(); alert("Product added");
}
function loadMyProducts(divId){
  const vendor=JSON.parse(localStorage.getItem('activeUser'));
  const out=document.getElementById(divId); out.innerHTML="";
  products.filter(p=>p.vendorId===vendor.id).forEach(p=>{ out.innerHTML+=`<div class="card"><h3>${p.name}</h3><p>₹${p.price}</p></div>`; });
}
function loadProducts(divId){
  const out=document.getElementById(divId); out.innerHTML="";
  products.forEach(p=>{ out.innerHTML+=`<div class="card"><h3>${p.name}</h3><p>₹${p.price}</p><button class="btn" onclick="addToCart('${p.id}')">Add to Cart</button></div>`; });
}
function addToCart(pid){
  let item=cart.find(c=>c.productId===pid); if(item) item.qty++; else cart.push({productId:pid,qty:1});
  saveAll(); alert("Added to cart");
}
function addRequest(inputId,listId){
  const vendor=JSON.parse(localStorage.getItem('activeUser'));
  const name=document.getElementById(inputId).value.trim();
  if(!name) return alert("Item name required");
  const reqs=JSON.parse(localStorage.getItem('requests'))||[];
  reqs.push({id:generateId(),vendorId:vendor.id,itemName:name});
  localStorage.setItem('requests', JSON.stringify(reqs));
  loadRequests(listId);
}
function loadRequests(listId){
  const vendor=JSON.parse(localStorage.getItem('activeUser'));
  const reqs=JSON.parse(localStorage.getItem('requests'))||[];
  const div=document.getElementById(listId); div.innerHTML="";
  reqs.filter(r=>r.vendorId===vendor.id).forEach(r=>{ div.innerHTML+=`<div class="card"><p>${r.itemName}</p></div>`; });
}
