
let users = JSON.parse(localStorage.getItem("users")) || [];
let products = JSON.parse(localStorage.getItem("products")) || [];
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let orders = JSON.parse(localStorage.getItem("orders")) || [];
let memberships = JSON.parse(localStorage.getItem("memberships")) || [];
let requests = JSON.parse(localStorage.getItem("requests")) || [];

function saveAll(){
  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("products", JSON.stringify(products));
  localStorage.setItem("cart", JSON.stringify(cart));
  localStorage.setItem("orders", JSON.stringify(orders));
  localStorage.setItem("memberships", JSON.stringify(memberships));
  localStorage.setItem("requests", JSON.stringify(requests));
}
function generateId(){ return Date.now()+Math.random().toString(36).slice(2,9); }
(function seed(){
  if(users.find(u=>u.role==="admin")) return;
  users.push({id:generateId(),name:"Master Admin",email:"admin@ems.com",password:"admin123",role:"admin"});
  const v1={id:generateId(),name:"Vendor One",email:"vendor1@ems.com",password:"vendor123",role:"vendor",category:"Catering"};
  const v2={id:generateId(),name:"Vendor Two",email:"vendor2@ems.com",password:"vendor123",role:"vendor",category:"Decoration"};
  users.push(v1,v2);
  products.push(
    {id:generateId(),vendorId:v1.id,name:"Basic Catering Package",price:4500,image:"./assets/images/default-food.jpg"},
    {id:generateId(),vendorId:v1.id,name:"Premium Catering Package",price:9000,image:"./assets/images/default-food.jpg"},
    {id:generateId(),vendorId:v2.id,name:"Stage Decoration",price:7000,image:"./assets/images/default-decor.jpg"},
    {id:generateId(),vendorId:v2.id,name:"Flower Decoration",price:3500,image:"./assets/images/default-decor.jpg"}
  );
  saveAll();
})();
