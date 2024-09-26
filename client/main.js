import "./style.css";
import renderAirports from "./public/scripts/airports.js";
import fetchAirport from "./public/scripts/airport.js";
import error404 from "./public/scripts/404.js";

const app = document.querySelector("#app");

const airport_id = window.location.pathname.split("/").pop();

if (
  window.location.pathname === "/" ||
  window.location.pathname === "/airports"
) {
  renderAirports(app);
} else if (airport_id) {
  fetchAirport(app, airport_id);
} else {
  error404(app);
}
