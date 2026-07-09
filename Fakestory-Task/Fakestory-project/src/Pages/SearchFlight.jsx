import { useMemo, useState } from "react";
import "./SearchFlight.css";

function FlightSearch() {
  const Flights = [
    {
      id: 1,
      airline: "IndiGo",
      from: "Delhi",
      to: "Mumbai",
      departure: "06:00",
      arrival: "08:10",
      duration: "2h 10m",
      price: 4500,
      stops: 0,
    },
    {
      id: 2,
      airline: "Air India",
      from: "Delhi",
      to: "Mumbai",
      departure: "09:00",
      arrival: "11:30",
      duration: "2h 30m",
      price: 5200,
      stops: 1,
    },
    {
      id: 3,
      airline: "SpiceJet",
      from: "Delhi",
      to: "Bengaluru",
      departure: "07:15",
      arrival: "10:00",
      duration: "2h 45m",
      price: 5800,
      stops: 0,
    },
    {
      id: 4,
      airline: "Akasa Air",
      from: "Mumbai",
      to: "Goa",
      departure: "10:00",
      arrival: "11:20",
      duration: "1h 20m",
      price: 3200,
      stops: 0,
    },
    {
      id: 5,
      airline: "Vistara",
      from: "Delhi",
      to: "Kolkata",
      departure: "12:00",
      arrival: "14:20",
      duration: "2h 20m",
      price: 6400,
      stops: 0,
    },
    {
      id: 6,
      airline: "IndiGo",
      from: "Mumbai",
      to: "Chennai",
      departure: "13:30",
      arrival: "15:40",
      duration: "2h 10m",
      price: 5100,
      stops: 1,
    },
    {
      id: 7,
      airline: "Air India",
      from: "Bengaluru",
      to: "Hyderabad",
      departure: "08:30",
      arrival: "09:40",
      duration: "1h 10m",
      price: 2900,
      stops: 0,
    },
    {
      id: 8,
      airline: "SpiceJet",
      from: "Delhi",
      to: "Goa",
      departure: "15:00",
      arrival: "17:30",
      duration: "2h 30m",
      price: 6100,
      stops: 1,
    },
    {
      id: 9,
      airline: "Akasa Air",
      from: "Mumbai",
      to: "Delhi",
      departure: "18:00",
      arrival: "20:10",
      duration: "2h 10m",
      price: 4700,
      stops: 0,
    },
    {
      id: 10,
      airline: "Vistara",
      from: "Chennai",
      to: "Delhi",
      departure: "20:00",
      arrival: "22:45",
      duration: "2h 45m",
      price: 6900,
      stops: 0,
    },
    {
      id: 11,
      airline: "IndiGo",
      from: "Delhi",
      to: "Jaipur",
      departure: "09:45",
      arrival: "10:45",
      duration: "1h",
      price: 2500,
      stops: 0,
    },
    {
      id: 12,
      airline: "Air India",
      from: "Jaipur",
      to: "Mumbai",
      departure: "14:00",
      arrival: "16:00",
      duration: "2h",
      price: 4300,
      stops: 1,
    },
    {
      id: 13,
      airline: "SpiceJet",
      from: "Kolkata",
      to: "Delhi",
      departure: "11:00",
      arrival: "13:20",
      duration: "2h 20m",
      price: 5900,
      stops: 0,
    },
    {
      id: 14,
      airline: "Akasa Air",
      from: "Goa",
      to: "Mumbai",
      departure: "17:00",
      arrival: "18:20",
      duration: "1h 20m",
      price: 3400,
      stops: 0,
    },
    {
      id: 15,
      airline: "Vistara",
      from: "Hyderabad",
      to: "Delhi",
      departure: "06:30",
      arrival: "08:50",
      duration: "2h 20m",
      price: 6200,
      stops: 0,
    },
    {
      id: 16,
      airline: "IndiGo",
      from: "Delhi",
      to: "Pune",
      departure: "16:15",
      arrival: "18:25",
      duration: "2h 10m",
      price: 4900,
      stops: 0,
    },
    {
      id: 17,
      airline: "Air India",
      from: "Pune",
      to: "Bengaluru",
      departure: "07:00",
      arrival: "08:30",
      duration: "1h 30m",
      price: 3800,
      stops: 0,
    },
    {
      id: 18,
      airline: "SpiceJet",
      from: "Delhi",
      to: "Mumbai",
      departure: "19:00",
      arrival: "21:15",
      duration: "2h 15m",
      price: 4800,
      stops: 0,
    },
    {
      id: 19,
      airline: "Akasa Air",
      from: "Mumbai",
      to: "Bengaluru",
      departure: "05:45",
      arrival: "07:35",
      duration: "1h 50m",
      price: 4100,
      stops: 1,
    },
    {
      id: 20,
      airline: "Vistara",
      from: "Delhi",
      to: "Chennai",
      departure: "21:00",
      arrival: "23:40",
      duration: "2h 40m",
      price: 6700,
      stops: 0,
    },
  ];

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const [airline, setAirline] = useState("");

  const [price, setPrice] = useState("");

  const [stops, setStops] = useState("");

  const [sort, setSort] = useState("");

  const filteredFlights = useMemo(() => {
    let result = [...Flights];

    // From filter
    if (from) {
      result = result.filter((flight) => flight.from === from);
    }

    // To filter
    if (to) {
      result = result.filter((flight) => flight.to === to);
    }

    // Airline filter
    if (airline) {
      result = result.filter((flight) => flight.airline === airline);
    }

    // Stops filter
    if (stops !== "") {
      result = result.filter((flight) => flight.stops === Number(stops));
    }

    // Price filter
    if (price) {
      result = result.filter((flight) => flight.price <= Number(price));
    }

    // Sorting
    if (sort === "low") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sort === "high") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [from, to, airline, price, stops, sort]);

  return (
    <div className="flight-container">
      <h1 className="flight-heading">✈ Flight Search</h1>

      {/* Filters row wrapper */}
      <div className="filters-row">
        {/* From */}
        <div className="search-section">
          <select
            className="filter-select"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          >
            <option value="">From</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Delhi">Delhi</option>
            <option value="Goa">Goa</option>
            <option value="Pune">Pune</option>
            <option value="Bengaluru">Bengaluru</option>
            <option value="Chennai">Chennai</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Kolkata">Kolkata</option>
          </select>
        </div>

        {/* To */}
        <div className="search-section">
          <select
            className="filter-select"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          >
            <option value="">To</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Delhi">Delhi</option>
            <option value="Goa">Goa</option>
            <option value="Pune">Pune</option>
            <option value="Bengaluru">Bengaluru</option>
            <option value="Chennai">Chennai</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Kolkata">Kolkata</option>
          </select>
        </div>

        {/* Airline */}
        <div className="search-section">
          <select
            className="filter-select"
            value={airline}
            onChange={(e) => setAirline(e.target.value)}
          >
            <option value="">All Airlines</option>

            <option value="IndiGo">IndiGo</option>

            <option value="Air India">Air India</option>

            <option value="SpiceJet">SpiceJet</option>

            <option value="Vistara">Vistara</option>

            <option value="Akasa Air">Akasa Air </option>
          </select>
        </div>

        {/* Stops */}
        <div className="search-section">
          <select
            className="filter-select"
            value={stops}
            onChange={(e) => setStops(e.target.value)}
          >
            <option value="">All Stops</option>

            <option value="0">Non Stop</option>

            <option value="1">1 Stop</option>
          </select>
        </div>

        {/* Price */}
        <div className="search-section">
          <input
            className="filter-input"
            type="number"
            placeholder="Max Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        {/* Sort */}
        <div className="search-section">
          <select
            className="filter-select"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="">Sort</option>

            <option value="low">Price Low to High</option>

            <option value="high">Price High to Low</option>
          </select>
        </div>
      </div>

      <hr className="divider" />

      <div className="results-list">
        {filteredFlights.length === 0 ? (
          <h2 className="no-flights">No Flight Found</h2>
        ) : (
          filteredFlights.map((flight) => (
            <div key={flight.id} className="flight-card">
              <h2 className="flight-airline">{flight.airline}</h2>

              <p className="flight-route">
                {flight.from} → {flight.to}
              </p>

              <p className="flight-timing">
                {flight.departure} - {flight.arrival}
              </p>

              <p className="flight-duration">Duration: {flight.duration}</p>

              <p className="flight-price">₹ {flight.price}</p>

              <p className="flight-stops">
                {flight.stops === 0 ? "Non Stop" : "1 Stop"}
              </p>

              <button className="book-btn">Book Now</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default FlightSearch;
