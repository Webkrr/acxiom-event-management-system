
function placeOrder(nId,eId,aId,cId,sId,pId, payId){
  if(!cart.length) return alert("Cart is empty");
  const name=document.getElementById(nId).value.trim();
  const email=document.getElementById(eId).value.trim();
  const addr=document.getElementById(aId).value.trim();
  const city=document.getElementById(cId).value.trim();
  const state=document.getElementById(sId).value.trim();
  const pin=document.getElementById(pId).value.trim();
  const pay=document.getElementById(payId).value;
  if(!name||!email||!addr||!city||!state||!pin) return alert("All fields required");
  const active=JSON.parse(localStorage.getItem('activeUser'))||{};
  const total=cart.reduce((t,c)=>{ const p=products.find(x=>x.id===c.productId); return t + ((p?.price)||0)*c.qty; },0);
  let firstVendorId=null;
  for(const c of cart){ const p=products.find(x=>x.id===c.productId); if(p&&p.vendorId){ firstVendorId=p.vendorId; break; } }
  orders.push({ id:generateId(), userId:active.id, userName:name, email, address:{addr,city,state,pin}, payment:pay, total, status:"Received", vendorId:firstVendorId });
  cart=[]; saveAll(); location.href="../shared/success.html";
}
function loadMyOrders(divId){
  const active=JSON.parse(localStorage.getItem('activeUser'))||{};
  const div=document.getElementById(divId); div.innerHTML="";
  orders.filter(o=>o.userId===active.id).forEach(o=>{ div.innerHTML+=`<div class="card"><p><b>Total:</b> ₹${o.total}</p><p><b>Status:</b> ${o.status}</p></div>`; });
}
function loadVendorOrders(divId){
  const vendor=JSON.parse(localStorage.getItem('activeUser'));
  const div=document.getElementById(divId); div.innerHTML="";
  orders.filter(o=>o.vendorId===vendor.id).forEach(o=>{
    div.innerHTML+=`<div class="card"><p><b>User:</b> ${o.userName}</p><p><b>Total:</b> ₹${o.total}</p><p><b>Status:</b> ${o.status}</p>
      <select id="st-${o.id}"><option>Received</option><option>Ready for Shipping</option><option>Out for Delivery</option></select>
      <button class="btn" onclick="updateStatus('${o.id}')">Update</button></div>`;
  });
}
function updateStatus(orderId){
  const sel=document.getElementById("st-"+orderId);
  const ord=orders.find(o=>o.id===orderId); if(!ord) return;
  ord.status=sel.value; saveAll(); alert("Status updated");
}
