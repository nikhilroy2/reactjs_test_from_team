import React, { Component, useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";

export default function Map({ startLocation, endLocation }) {
  let currentLocation = { lat: 40.756795, lng: -73.954298 };
  //console.log(startLocation, endLocation);
  
  const apiIsLoaded = (map, maps) => {
    let directionsService = new window.google.maps.DirectionsService();
    let directionsRenderer = new window.google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map);
    //const origin = { lat: 40.756795, lng: -73.954298 };
    //const destination = { lat: 41.756795, lng: -78.954298 };
    mapViewUpdate();
    function mapViewUpdate() {
      console.log("change");
      directionsRenderer.setMap(map);
      directionsService.route(
        {
          origin: startLocation,
          destination: endLocation,
          travelMode: window.google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === window.google.maps.DirectionsStatus.OK) {
            console.log(result);
            directionsRenderer.setDirections(result);
          } else {
            console.error(`error fetching directions ${result}`);
          }
        }
      );
    }
  };
  return (
    <div>
      <div style={{ height: "400px", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyD2NVhCGOQphMEo2ay2kBS15Whqki-hjHo",
          }}
          resetBoundsOnResize={false}
          defaultCenter={{ lat: 40.756795, lng: -73.954298 }}
          defaultZoom={10}
          center={currentLocation}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps)}
        />
      </div>
    </div>
  );
}
