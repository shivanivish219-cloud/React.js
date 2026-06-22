import { useState } from "react";

export default function WeatherAnimation() {
  const [weather, setWeather] = useState("sunny");

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.5s ease",
        background:
          weather === "sunny"
            ? "#fef08a"
            : weather === "rainy"
              ? "#93c5fd"
              : "#1f2937",
        color: weather === "night" ? "#fff" : "#000",
      }}
    >
      <h1>Weather Animation</h1>

      {/* Radio Buttons */}
      <div style={{ marginBottom: "20px" }}>
        <label>
          <input
            type="radio"
            value="sunny"
            checked={weather === "sunny"}
            onChange={(e) => setWeather(e.target.value)}
          />
          ☀️ Sunny
        </label>

        <label style={{ marginLeft: "15px" }}>
          <input
            type="radio"
            value="rainy"
            checked={weather === "rainy"}
            onChange={(e) => setWeather(e.target.value)}
          />
          🌧️ Rainy
        </label>

        <label style={{ marginLeft: "15px" }}>
          <input
            type="radio"
            value="night"
            checked={weather === "night"}
            onChange={(e) => setWeather(e.target.value)}
          />
          🌙 Night
        </label>
      </div>

      {/* Animation Area */}
      <div style={{ fontSize: "80px", transition: "all 0.5s ease" }}>
        {weather === "sunny" && "☀️"}
        {weather === "rainy" && "🌧️"}
        {weather === "night" && "🌙"}
      </div>

      {/* Simple animation effect */}
      {weather === "rainy" && (
        <div style={{ fontSize: "30px", marginTop: "10px" }}>
          🌧️💧💧💧 Rain falling...
        </div>
      )}

      {weather === "sunny" && (
        <div style={{ fontSize: "30px", marginTop: "10px" }}>
          😎 Bright and warm!
        </div>
      )}

      {weather === "night" && (
        <div style={{ fontSize: "30px", marginTop: "10px" }}>
          🌌 Calm night sky
        </div>
      )}
    </div>
  );
}