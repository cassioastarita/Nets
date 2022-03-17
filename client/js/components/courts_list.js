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
    const long = parseFloat(court.coordinates.split(",")[1]);
    const lat = parseFloat(court.coordinates.split(",")[0]);

    if (court.coordinates.split(",")[0].slice(0, 1) === "-") {
      const lat = -Math.abs(
        parseFloat(
          court.coordinates
            .split(",")[0]
            .slice(1, court.coordinates.split(",")[0].length)
        )
      );
    }
    if (court.coordinates.split(",")[1].slice(0, 1) === "-") {
      const lat = -Math.abs(
        parseFloat(
          court.coordinates
            .split(",")[1]
            .slice(1, court.coordinates.split(",")[0].length)
        )
      );
    }

    var pushpin = new Microsoft.Maps.Pushpin(
      new Microsoft.Maps.Location(lat, long),

      {
        title: `${court.court_name}`,
        subTitle: `Nets: ${court.net}`,
        subTitle: `Toilet: ${court.toilet}`,
        subTitle: `Water: ${court.water}`,
        subTitle: `Parking ${court.parking}`,

        text: 1,
      }
    );

    map.entities.push(pushpin);
  });
}

function renderCourt() {
  renderMap();
  state.courts.map((court) => console.log(court.coordinates.split(",")[0]));
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