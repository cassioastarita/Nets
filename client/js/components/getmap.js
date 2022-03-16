function GetMap() {
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