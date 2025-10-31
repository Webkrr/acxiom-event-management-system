
function setActiveUser(u){ localStorage.setItem("activeUser", JSON.stringify(u)); }
function adminLogin(eId,pId){
  const email=document.getElementById(eId).value, pwd=document.getElementById(pId).value;
  const u=users.find(x=>x.email===email&&x.password===pwd&&x.role==="admin");
  if(u){ setActiveUser(u); location.href="dashboard.html"; } else alert("Invalid admin credentials");
}
function adminSignup(nId,eId,pId){
  const name=document.getElementById(nId).value.trim(), email=document.getElementById(eId).value.trim(), pwd=document.getElementById(pId).value.trim();
  if(!name||!email||!pwd) return alert("All fields required");
  users.push({id:generateId(),name,email,password:pwd,role:"admin"}); saveAll(); alert("Admin registered!"); location.href="login.html";
}
function vendorLogin(eId,pId){
  const email=document.getElementById(eId).value, pwd=document.getElementById(pId).value;
  const u=users.find(x=>x.email===email&&x.password===pwd&&x.role==="vendor");
  if(u){ setActiveUser(u); location.href="dashboard.html"; } else alert("Invalid vendor credentials");
}
function userLogin(eId,pId){
  const email=document.getElementById(eId).value, pwd=document.getElementById(pId).value;
  const u=users.find(x=>x.email===email&&x.password===pwd&&x.role==="user");
  if(u){ setActiveUser(u); location.href="dashboard.html"; } else alert("Invalid user credentials");
}
function userSignup(nId,eId,pId){
  const name=document.getElementById(nId).value.trim(), email=document.getElementById(eId).value.trim(), pwd=document.getElementById(pId).value.trim();
  if(!name||!email||!pwd) return alert("All fields required");
  users.push({id:generateId(),name,email,password:pwd,role:"user"}); saveAll(); alert("User registered!"); location.href="login.html";
}
