import logo from "./logo.svg";
import "./App.css";
import Base from "./Layout/Base";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Map from "./Map";
import { useState } from "react";

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
  const [startLocation, setStartLocation] = useState("Thakurgaon");
  const [endLocation, setEndLocation] = useState("Dinajpur");

  const inputStartLocation = (event) => {
    setStartLocation(event.target.value);
  };
  const inputEndLocation = (event) => {
    setEndLocation(event.target.value);
  };
  return (
    <div id="google_map_view">
      <h2>Google map</h2>

      <div className="map_control_wrapper">
        <div className="form_group">
          <label htmlFor="">Start Location</label>
          <select onInput={inputStartLocation} id="startLocation">
            <option value="Dinajpur">Dinajpur</option>
            <option value="Thakurgaon">Thakurgaon</option>
            <option value="Dhaka">Dhaka</option>
            <option value="Rajshahi">Rajshahi</option>
            <option value="Sylhet">Sylhet</option>
            <option value="Rangpur">Rangpur</option>
          </select>
        </div>
        <br />
        <div className="form_group">
          <label htmlFor="">End Location</label>
          <select onInput={inputEndLocation} id="endLocation">
            <option value="Thakurgaon">Thakurgaon</option>
            <option value="Dinajpur">Dinajpur</option>
            <option value="Dhaka">Dhaka</option>
            <option value="Rajshahi">Rajshahi</option>
            <option value="Sylhet">Sylhet</option>
            <option value="Rangpur">Rangpur</option>
          </select>
        </div>
        <br />
      </div>
      <div id="map_embed" style={{'height': '500px', 'width': '100%'}}>
      </div>
    </div>
  );
}
