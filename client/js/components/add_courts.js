function renderAddCourt() {
  document.querySelector("#page").innerHTML = `<section class="create-court">
          <form action="" onSubmit="addCourt(event)">
            <h2>Add Court</h2>
            <fieldset>
              <label for="">Location: </label><br />
              <input type="text" name="courtName" />
            </fieldset>

            <div class="radio-group">
            <label for="">Netted Court?</label><br />
            <input type="radio" name="net" id="net_yes" value="yes">
            <label for="yes">Yes</lablel>
            </div>

            <div class="radio-group">
            <input type="radio" name="net" id="net_no" value="no">
            <label for="no">No</label>
            </div>
             
            <div class="radio-group">
            <label for="">Toilets?</label><br />
            <input type="radio" name="toilet" id="toilet_yes" value="yes">
            <label for="yes">Yes</lablel>
            </div>

            <div class="radio-group">
            <input type="radio" name="toilet" id="toilet_no" value="no">
            <label for="no">No</label>
            </div>
             
            <div class="radio-group">
            <label for="">Drink Taps?</label><br />
            <input type="radio" name="water" id="water_yes" value="yes">
            <label for="yes">Yes</lablel>
            </div>

            <div class="radio-group">
            <input type="radio" name="water" id="water_no" value="no">
            <label for="no">No</label>
            </div>
             
            <div class="radio-group">
            <label for="">Parking?</label><br />
            <input type="radio" name="parking" id="parking_yes" value="yes">
            <label for="yes">Yes</lablel>
            </div>

            <div class="radio-group">
            <input type="radio" name="parking" id="parking_no" value="no">
            <label for="no">No</label>
            </div>

            <fieldset>
            <label for="">Type of Court: </label><br />
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
    data["coordinates"] = coordinates.join(",");

    console.log(data);

    function addCourt(event) {
      event.preventDefault();
      const form = event.target;
      const data = Object.fromEntries(new FormData(form));
      if (data.net == "yes") {
        data.net = true;
      } else {
        data.net = false;
      }

      if (data.toilet == "yes") {
        data.toilet = true;
      } else {
        data.toilet = false;
      }

      if (data.water == "yes") {
        data.water = true;
      } else {
        data.water = false;
      }

      if (data.parking == "yes") {
        data.parking = true;
      } else {
        data.parking = false;
      }
    }

    console.log(data);
    axios
      .post("/api/courts", data)
      .then((res) => res.data)
      .then((newCourt) => state.courts.push(newCourt));

    // .then(() => renderCourtList())

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
