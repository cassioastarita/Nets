function renderCourtList() {
  document.querySelector("#page").innerHTML = `<section class="courts-list">
    ${renderCourt()}</section>
    `;
}


function renderMap() {
  document.querySelector('#page').innerHTML = `
    <section id="court-map" class="court-map"> 

    </section>
  `
  var map = new Microsoft.Maps.Map("#court-map", {
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
        title: `${court.img_url}`,
        subTitle: `Nets: ${court.net}, Toilet: ${court.toilet}, Water: ${court.toilet}, Parking: ${court.parking}`,
        // next: `Toilet: ${court.toilet}`,
        // subTitle: `Water: ${court.water}`,
        // subTitle: `Parking ${court.parking}`,

        text: 1,
      }
    );

    map.entities.push(pushpin);
  });
}

function renderCourt() {
  return state.courts
    .map(
      (court) => `
        <section class = 'court' data-id= "${court.id}">
           

        </section>`
    )
    .join(" ");
}
