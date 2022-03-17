//nets front page icons
function renderHeaderNav() {
  document.querySelector("#header-nav").innerHTML = `
    <ul>
      <li class= "material-icons sign-up-icon" onClick="render('signUp')">person_add</li>
      <li class="material-icons login-icon" onClick="render('login')">login</li>
      <li class="material-icons add-location" onClick="render('addCourt')">add_location</li>
      <li class="material-icons logout" onClick="render('logout')">logout</li>
    </ul>`;
}
renderHeaderNav();
//decide which component to display on the page
function render(component) {
  if (component === "signUp") {
    renderSignUp();
  } else if (component === "login") {
    renderLogin();
  } else if (component === "addCourt") {
    renderAddCourt();
  } else if (component === "courtsList") {
    renderCourtList();
  }
}
//
