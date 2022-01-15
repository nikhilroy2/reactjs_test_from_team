import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import GoogleMapReact from "google-map-react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import Base from "./Layout/Base";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Map from "./Map";
export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Base>
          <main>
            <GoogleMapView></GoogleMapView>
          </main>
        </Base>
      </div>
    </BrowserRouter>
  );
}

const AnyReactComponent = ({ text }) => <div>{text}</div>;
function GoogleMapView() {
  return (
    <div id="google_map_view">
      <h2>Google map</h2>

      <div className="map_control_wrapper">
        <div className="form_group">
          <label htmlFor="">Start Location</label>
          <input type="text" />
        </div>
        <br />
        <div className="form_group">
          <label htmlFor="">End Location</label>
          <input type="text" />
        </div>
        <br />
      </div>
      <div id="map_embed">
        <ReactMap></ReactMap>
      </div>
    </div>
  );
}
const render = (status: Status) => {
  return <h1>{status}</h1>;
};
function ReactMap() {
  return (
    <Wrapper apiKey={"YOUR_API_KEY"} render={render}>
      <Map></Map>
    </Wrapper>
  );
}
