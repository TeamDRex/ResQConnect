import React, { Component } from 'react';

class AgencyMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      map: null,
      agencyLocationsLayer: null,
      agencyContactInfoLayer: null,
      userLocationInfoWindow: null, // Info window for user's location
      userLocation: null, // User's location (latitude and longitude)
    };
  }

  componentDidMount() {
    // Load the Google Maps script with a callback function.
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCUBkvAqK3_mWHzs-H040iBU-cmrT6uuqc&libraries=places&callback=initMap`;
    script.async = true;
    window.initMap = this.initMap; // Assign the callback function to the global scope
    document.head.appendChild(script);
  }

  initMap = () => {
    // Create a new Google Maps map object.
    const map = new window.google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: { lat: 37.7833, lng: -122.4167 },
    });

    // Create a layer to display the agencies' locations.
    const agencyLocationsLayer = new window.google.maps.Data();

    // Create a layer to display the agencies' contact info.
    const agencyContactInfoLayer = new window.google.maps.Data();

    // Set the map and layers in the component's state.
    this.setState({
      map,
      agencyLocationsLayer,
      agencyContactInfoLayer,
    });

    // Get the user's current location.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          // Create a marker for the user's location.
          const userMarker = new window.google.maps.Marker({
            position: userLocation,
            map,
          });

          // Add the user's location to the agency locations layer.
          agencyLocationsLayer.add({
            geometry: {
              type: 'Point',
              coordinates: [userLocation.lng, userLocation.lat], // Corrected order
            },
            properties: {
              name: 'Your Location',
            },
          });

          // Create an info window for the user's location.
          const userLocationInfoWindow = new window.google.maps.InfoWindow();

          // Add a click event listener to the user's marker to open the info window.
          userMarker.addListener('click', () => {
            // Set the content of the info window to display the user's location.
            userLocationInfoWindow.setContent(`Latitude: ${userLocation.lat}<br>Longitude: ${userLocation.lng}`);
            userLocationInfoWindow.open(map, userMarker);
          });

          // Set the user's location and info window in the component's state.
          this.setState({
            userLocation,
            userLocationInfoWindow,
          });
        },
        (error) => {
          // Handle geolocation errors here.
          console.error('Error getting location:', error);
        }
      );
    } else {
      // Geolocation is not supported by the browser.
      alert('Geolocation is not supported by your browser.');
    }

    // Implement a way for agencies to share their contact info.
    // This may involve adding a button or form to the user interface.

    // Update the map whenever an agency shares its contact info.
    // This may involve adding a function to the button or form that updates the agencyContactInfoLayer layer.
  };

  render() {
    return (
      <div>
        <div id="map" style={{ width: '100%', height: '400px' }}></div>
        {/* Add UI elements for agency contact info here */}
      </div>
    );
  }
}

export default AgencyMap;