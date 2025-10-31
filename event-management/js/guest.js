// ========== GUEST MODULE ==========

let guests = JSON.parse(localStorage.getItem("guests")) || [];

// SAVE
function saveGuests(){
  localStorage.setItem("guests", JSON.stringify(guests));
}

// LOAD GUEST LIST
function loadGuests(){
  let div = document.getElementById("guestList");
  div.innerHTML = "";

  guests.forEach(g => {
    div.innerHTML += `
      <div class="card">
        <p>${g.name}</p>
        <button class="btn" onclick="deleteGuest('${g.id}')">Delete</button>
      </div>
    `;
  });
}

// ADD GUEST
function addGuest(){
  let n = document.getElementById("guestName").value;

  if(!n){
    alert("Guest name required");
    return;
  }

  guests.push({
    id: Date.now().toString(),
    name: n
  });

  saveGuests();
  loadGuests();
}

// DELETE
function deleteGuest(id){
  guests = guests.filter(g => g.id !== id);
  saveGuests();
  loadGuests();
}
