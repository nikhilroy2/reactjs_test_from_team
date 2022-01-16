import logo from "./logo.svg";
import "./App.css";
import Base from "./Layout/Base";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Map from "./Map";

import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  listIncreased,
  startLocation,
  endLocation
} from './Redux_management/reducer'


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

  const dispatch = useDispatch();

  const inputStartLocation = (event)=> {
    dispatch(startLocation(event.target.value))
    //console.log(count)
  }
  const inputEndLocation = (event)=> {
    dispatch(endLocation(100))
    console.log(event.target.value)
  }
  return (
    <div id="google_map_view">
      <h2>Google map</h2>

      <div className="map_control_wrapper">
        <div className="form_group">
          <label htmlFor="">Start Location</label>
          <input type="text" onInput={inputStartLocation} />
        </div>
        <br />
        <div className="form_group">
          <label htmlFor="">End Location</label>
          <input type="text" onInput={inputEndLocation} />
        </div>
        <br />
      </div>
      <div id="map_embed">
        <Map></Map>
      </div>
    </div>
  );
}
