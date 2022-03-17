function renderGetMap() {
  document.querySelector('#myMap').innerHTML = `
    <section class="getmap">
  
    </section>
  `
  // how to show the map in the page
}

function getMap() {
  var map = new Microsoft.Maps.Map('#myMap', {
      credentials: 'Your Bing Maps Key',
      center: new Microsoft.Maps.Location(47.6149, -122.1941)
  });
  var center = map.getCenter();
  //Create custom Pushpin
  var pin = new Microsoft.Maps.Pushpin(center, {
      title: 'Microsoft',
      subTitle: 'City Center',
      text: '1'
  });
  //Add the pushpin to the map
  map.entities.push(pin);
}