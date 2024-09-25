import "./style.css";
import fetchAirport from "./public/scripts/airport.js";

const formatNumbers = (number) => number.toLocaleString();

const clearDOM = () => {
  const app = document.querySelector("#app");
  app.innerHTML = "";
};

const app = document.querySelector("#app");

const renderAirports = async () => {
  const airportsContainerEl = document.createElement("div");

  const titleEl = document.createElement("h1");
  titleEl.textContent = "Busiest Airports in The World (2023)";
  airportsContainerEl.appendChild(titleEl);

  const res = await fetch("http://localhost:3001/airports");
  const data = await res.json();

  if (data) {
    data.map((airport) => {
      const { id, name, location, country, image, passengers } = airport;
      const airportCard = document.createElement("div");

      const nameEl = document.createElement("h3");
      nameEl.textContent = name;

      const locationEl = document.createElement("p");
      locationEl.textContent = `${location}, ${country}`;

      const imageEl = document.createElement("img");
      imageEl.src = image;

      const imageLinkEl = document.createElement("a");
      imageLinkEl.appendChild(imageEl);
      imageLinkEl.href = `/airports/${id}`;

      const passengersEl = document.createElement("p");
      passengersEl.textContent = `Total Passengers: ${formatNumbers(
        passengers
      )}`;

      airportCard.appendChild(nameEl);
      airportCard.appendChild(locationEl);
      airportCard.appendChild(passengersEl);
      airportCard.appendChild(imageLinkEl);

      airportsContainerEl.appendChild(airportCard);
    });
  } else {
    const h3El = document.createElement("h3");
    h3El.textContent = "No Ranking Available";
    airportsContainerEl.h3El;
  }

  app.appendChild(airportsContainerEl);
};

if (
  window.location.pathname === "/" ||
  window.location.pathname === "/airports"
) {
  renderAirports();
} else {
  fetchAirport(app);
}
