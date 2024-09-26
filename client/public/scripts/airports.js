import { createElement } from "../../utils";

const renderAirports = async (app) => {
  const airportsContainerEl = createElement("div", "airports__container");

  const titleEl = createElement(
    "h1",
    "airports__title",
    "Busiest Airports in The World (2023)"
  );
  airportsContainerEl.appendChild(titleEl);

  const res = await fetch("http://localhost:3001/api/airports");
  const data = await res.json();

  if (data) {
    data.map((airport) => {
      const { id, name, location, country, image, passengers } = airport;
      const airportCard = createElement("div", "airport__card");

      const nameEl = createElement("h3", "airport__name", name);
      const locationEl = createElement(
        "p",
        "airport__location",
        `${location}, ${country}`
      );
      const imgEl = createElement("img", "airport__image", image);

      const imgLinkEl = createElement("a", "airport__link");
      imgLinkEl.href = `/airports/${id}`;
      imgLinkEl.appendChild(imgEl);

      const passengersEl = createElement(
        "p",
        "airport__passengers",
        `${passengers.toLocaleString()} passengers`
      );

      airportCard.appendChild(imgLinkEl);
      airportCard.appendChild(nameEl);
      airportCard.appendChild(locationEl);
      airportCard.appendChild(passengersEl);

      airportsContainerEl.appendChild(airportCard);
    });
  } else {
    const h3El = createElement("h3", "airports__empty", "No Ranking Available");
    airportsContainerEl.appendChild(h3El);
  }

  app.appendChild(airportsContainerEl);
};

export default renderAirports;
