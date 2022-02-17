navigator.geolocation.getCurrentPosition(
    function(data) {
        const {latitude, longitude} = data.coords;
    console.log(latitude);
    console.log(longitude);
  });
  
  
  
  let a =  Math.sqrt((window.cities.lat - latitude) * (window.cities.lat - latitude) + (window.cities.lng - longitude) * (window.cities.lng - longitude));
  console.log (a);