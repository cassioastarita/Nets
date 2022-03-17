// let courtName = []
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
renderCourtList();

function renderMap() {
  var map = new Microsoft.Maps.Map("#myMap", {
    credentials:
      "AgUTdckHkoEEnnNX_M9JCirskrm9awj3JA4fPik4s2PGFJn5XEGfnldjkCTosCM_",
    center: new Microsoft.Maps.Location(-37.806494, 144.950894),
  });

  state.courts.map((court) => {
    var pushpin = new Microsoft.Maps.Pushpin(
      new Microsoft.Maps.Location(-37.7646895, 144.9414259),

      {
        title: `${court.court_name}`,
        subTitle: `Nets: ${court.net}`,
        subTitle: `Toilet: ${court.toilet}`,
        subTitle: `Water: ${court.water}`,
        subTitle: `Parking ${court.parking}`,

        text: 1,
      }
    );
    console.log(`hello ${court.coordinates}`);
    map.entities.push(pushpin);
  });
}

function renderCourt() {
  state.courts.map((court) => console.log(court.coordinates));
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
