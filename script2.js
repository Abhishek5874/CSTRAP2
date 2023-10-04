function findAccommodation() {
    const collegeLat = parseFloat(document.getElementById('collegeLat').value);
    const collegeLong = parseFloat(document.getElementById('collegeLong').value);
    const railwayStationLat = parseFloat(document.getElementById('railwayStationLat').value);
    const railwayStationLong = parseFloat(document.getElementById('railwayStationLong').value);
    const airportLat = parseFloat(document.getElementById('airportLat').value);
    const airportLong = parseFloat(document.getElementById('airportLong').value);
    const hospitalLat = parseFloat(document.getElementById('hospitalLat').value);
    const hospitalLong = parseFloat(document.getElementById('hospitalLong').value);
  
    // Calculate the middle point between the locations
    const midLat = (collegeLat + railwayStationLat + airportLat + hospitalLat) / 4;
    const midLong = (collegeLong + railwayStationLong + airportLong + hospitalLong) / 4;
  
    const map = L.map('map').setView([midLat, midLong], 15);
  
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
  
    // Add markers for the locations
    L.marker([collegeLat, collegeLong]).addTo(map)
      .bindPopup('College')
      .openPopup();
  
    L.marker([railwayStationLat, railwayStationLong]).addTo(map)
      .bindPopup('Railway Station')
      .openPopup();
  
    L.marker([airportLat, airportLong]).addTo(map)
      .bindPopup('Airport')
      .openPopup();
  
    L.marker([hospitalLat, hospitalLong]).addTo(map)
      .bindPopup('Hospital')
      .openPopup();
  
    // Add a circle with a radius of 50 meters around the middle point
    L.circle([midLat, midLong], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 500
    }).addTo(map);
  }
  