import { createElement } from "../../utils";
import error404 from "./404.js";

const fetchAirport = async (app, airport_id) => {
  try {
    const res = await fetch(`http://localhost:3001/api/airports/${airport_id}`);
    const data = await res.json();

    if (!data) {
      throw new Error();
    }

    if (data) {
      const {
        name,
        location,
        country,
        code,
        image,
        passengers,
        percentageChange,
      } = data;

      const airportCardEl = createElement("div", "airport__card");
      const imageEl = createElement("img", "airport__image", image);
      const nameEl = createElement("h3", "airport__name", name);
      const locationEl = createElement(
        "h3",
        "airport__location",
        `${location}, ${country}`
      );
      const codeEl = createElement(
        "p",
        "airport__code",
        `Airport Code: ${code}`
      );
      const passengersEl = createElement(
        "p",
        "airport__passengers",
        `Passengers: ${passengers.toLocaleString()}`
      );
      const percentageChangeEl = createElement(
        "p",
        "airport__percentage-change",
        `Percentage Change: ${percentageChange}%`
      );

      const returnButtonEl = createElement(
        "button",
        "return-button",
        "View All Airports"
      );

      returnButtonEl.addEventListener("click", () => {
        window.location.pathname = "/";
      });

      airportCardEl.appendChild(imageEl);
      airportCardEl.appendChild(nameEl);
      airportCardEl.appendChild(locationEl);
      airportCardEl.appendChild(codeEl);
      airportCardEl.appendChild(passengersEl);
      airportCardEl.appendChild(percentageChangeEl);
      airportCardEl.appendChild(returnButtonEl);

      app.appendChild(airportCardEl);
    }
  } catch (err) {
    error404(app);
  }
};

export default fetchAirport;
