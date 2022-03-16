// let courtName = data.courtName;
// let locationAddress = courtName.split(" ").join("%20");
// axios
//   .get(
//     `http://dev.virtualearth.net/REST/v1/Locations?addressLine=${locationAddress}&key=AgUTdckHkoEEnnNX_M9JCirskrm9awj3JA4fPik4s2PGFJn5XEGfnldjkCTosCM_`
//   )
//   .then(
//     (res) => res.data.resourceSets[0].resources[0].geocodePoints[0].coordinates
//   );

function renderCourtList() {
  document.querySelector("#page").innerHTML = `<section class="courts-list">
    ${renderCourt()}</section>
    `;
}

function renderCourt() {
  return state.courts
    .map(
      (court) => `
      <section class = 'court' data-id= "${court.id}">
          <header>
              <h2>${court.court_name}</h2>
            
          </header>
          <p>${court.court_name}</p>
          <p>${court.net}</p>
          <p>${court.toilet}</p>
          <p>${court.water}</p>
          <p>${court.parking}</p>
          <p>${court.img_url}</p>
          
      </section>`
    )
    .join(" ");
}
