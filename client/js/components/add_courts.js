function renderAddCourt() {
  document.querySelector("#page").innerHTML = `<section class="create-court">
          <form action="" onSubmit="addCourt(event)">
            <h2>Add Court</h2>
            <fieldset>
              <label for="">Location: </label><br />
              <input type="text" name="courtName" />
            </fieldset>

            <fieldset>
              <label for="">Fenced Court: </label><br />
              <input type="text" name="net" />
            </fieldset>

            <fieldset>
            <label for="">Toilets: </label><br />
            <input type="text" name="toilet" />
            </fieldset>

            <fieldset>
            <label for="">Drink Taps: </label><br />
            <input type="text" name="water" />
            </fieldset>

            <fieldset>
            <label for="">Parking: </label><br />
            <input type="text" name="parking" />
          </fieldset>

            <fieldset>
            <label for="">Image: </label><br />
            <input type="text" name="imgUrl" />
          </fieldset>
          
            <button>Add Court</button>
          </form>
        </section>`;
}
const getCoordinatesPostRequestToServer = async (data) => {
  try {
    const addressLine = data.courtName.split(" ").join("%20");
    const coordinateResponse = await axios.get(
      `http://dev.virtualearth.net/REST/v1/Locations?addressLine=${addressLine}&maxResults=1&key=AgUTdckHkoEEnnNX_M9JCirskrm9awj3JA4fPik4s2PGFJn5XEGfnldjkCTosCM_`
    );
    const coordinates =
      coordinateResponse.data.resourceSets[0].resources[0].point.coordinates;
    console.log(coordinates);
    console.log(coordinateResponse);
    data["coordinates"] = coordinates;

    console.log(data);

    axios
      .post("/api/courts", data)
      .then((res) => res.data)
      .then((newCourt) => state.courts.push(newCourt))
      .then(() => renderCourtList());
  } catch (err) {
    // Handle Error Here
    console.error(err);
  }
};
function addCourt(event) {
  event.preventDefault();
  const form = event.target;
  const data = Object.fromEntries(new FormData(form));
  getCoordinatesPostRequestToServer(data);
}
// function addCourt(event) {
//   event.preventDefault();
//   const form = event.target;
//   const data = Object.fromEntries(new FormData(form));
//   axios
//     .post("/api/courts", data)
//     .then((res) => res.data)
//     .then((newCourt) => state.courts.push(newCourt))
//     .then(() => renderCourtList());

// axios
//   .post("/api/courts", res)
//   .then((res) => res.data)
//   .then((locations) => console.log(locations));
// .then(newCourt => state.courts.push(newCourt))
// .then(() => renderCourtList())
