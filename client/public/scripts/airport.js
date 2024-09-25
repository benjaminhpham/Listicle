const fetchAirport = async (app) => {
  const airport_id = window.location.pathname.split("/").pop();
  const res = await fetch(`http://localhost:3001/airports/${airport_id}`);
  const data = await res.json();

  if (data) {
    const {
      id,
      rank,
      name,
      location,
      country,
      code,
      image,
      passengers,
      percentageChange,
    } = data;

    const airportCardEl = document.createElement("div");

    const nameEl = document.createElement("h3");
    nameEl.textContent = name;

    const locationEl = document.createElement("p");
    locationEl.textContent = location;

    const countryEl = document.createElement("p");
    countryEl.textContent = country;

    const codeEl = document.createElement("p");
    codeEl.textContent = code;

    const imageEl = document.createElement("img");
    imageEl.src = image;

    const passengersEl = document.createElement("p");
    passengersEl.textContent = passengers.toLocaleString();

    const percentageChangeEl = document.createElement("p");
    percentageChangeEl.textContent = `${percentageChange}%`;

    airportCardEl.appendChild(nameEl);
    airportCardEl.appendChild(locationEl);
    airportCardEl.appendChild(countryEl);
    airportCardEl.appendChild(codeEl);
    airportCardEl.appendChild(imageEl);
    airportCardEl.appendChild(passengersEl);
    airportCardEl.appendChild(percentageChangeEl);

    app.appendChild(airportCardEl);
  }
};

export default fetchAirport;
