
function loadVendorsSelect(selId){
  const sel=document.getElementById(selId); sel.innerHTML='<option value="">Select Vendor</option>';
  users.filter(u=>u.role==='vendor').forEach(v=>{ sel.innerHTML+=`<option value="${v.id}">${v.name} (${v.category||''})</option>`; });
}
function addMembership(vSelId, planId){
  const vendorId=document.getElementById(vSelId).value, plan=document.getElementById(planId).value;
  if(!vendorId) return alert("Vendor required");
  const months= plan==='6 Months'?6: (plan==='1 Year'?12:24);
  const start=new Date(), end=new Date(); end.setMonth(end.getMonth()+months);
  memberships.push({id:generateId(),vendorId,plan,start_date:start.toDateString(),end_date:end.toDateString(),status:"Active"});
  saveAll(); alert("Membership added");
}
function loadMembershipsList(selId){
  const sel=document.getElementById(selId); sel.innerHTML='<option value="">Select Membership</option>';
  memberships.forEach(m=>{ const v=users.find(u=>u.id===m.vendorId); sel.innerHTML+=`<option value="${m.id}">${v?.name||'Vendor'} → ${m.plan} (${m.start_date} → ${m.end_date})</option>`; });
}
function updateMembership(mSelId, actId){
  const id=document.getElementById(mSelId).value, action=document.getElementById(actId).value;
  if(!id) return alert("Select membership");
  const m=memberships.find(x=>x.id===id); if(!m) return alert("Invalid membership");
  if(action==='Cancel') m.status='Cancelled';
  else{ const add=action==='Extend 6 Months'?6:12; const end=new Date(m.end_date); end.setMonth(end.getMonth()+add); m.end_date=end.toDateString(); }
  saveAll(); alert("Membership updated");
}
