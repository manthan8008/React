import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=26.2684&longitude=73.0059&current=temperature_2m,is_day,wind_speed_10m,wind_direction_10m,wind_gusts_10m,precipitation",
        );
        if (!response.ok) {
          throw new Error("Network response failed");
        }
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchWeather();
  }, []);
  return (
    <>
      <div className="flex justify-center items-center h-dvh">
        <video className="hero-video " autoPlay loop muted playsInline>
          <source src={"../src/assets/hero.mp4"} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div
          className={
            users && users.current.is_day
              ? "h-120 w-100 bg-black/10 rounded-2xl flex flex-col items-center justify-between py-10 border-2 mx-10 border-gray-400 backdrop-blur-2xl  "
              : "h-120 w-100 bg-black/10 rounded-2xl flex flex-col justify-between items-center py-10 border-gray-400 border-2 backdrop-blur-2xl mx-10"
          }
        >
          <div className="text-white md:text-7xl text-5xl">
            {users && users.current.is_day ? "☀️" + " " : "🌙" + " "}
            {users && users.current.temperature_2m + "°C"}
          </div>
          <div className="w-full text-white">
            <ul className="flex flex-col gap-5 w-full px-4 justify-center items-center md:text-2xl">
              <li className="w-full md:px-10 px-2 flex justify-between">
                <p>Wind Speed</p>
                <p>{users && users.current.wind_speed_10m}</p>
              </li>
              <li className="border-b-2 border-white w-full"></li>
              <li className="w-full md:px-10 px-2 flex justify-between">
                <p>Wind Direction</p>
                <p>{users && users.current.wind_direction_10m}</p>
              </li>
              <li className="border-b-2 border-white w-full"></li>
              <li className="w-full md:px-10 px-2 flex justify-between">
                <p>Wind Gusts</p>
                <p>{users && users.current.wind_gusts_10m}</p>
              </li>
              <li className="border-b-2 border-white w-full"></li>
              <li className="w-full md:px-10 px-2 flex justify-between">
                <p>Percipitation</p>
                <p>{users && users.current.precipitation}</p>
              </li>
              <li className="border-b-2 border-white w-full"></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
