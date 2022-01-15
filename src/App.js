import logo from "./logo.svg";
import "./App.css";
import Base from "./Layout/Base";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
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

function GoogleMapView() {

  return (
    <div id="google_map_view">
      
    </div>
  )
}
