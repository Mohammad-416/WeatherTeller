import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [value, setValue] = useState("");
  const [status, setStatus] = useState("");
  const myfunc = (e) => {
    e.preventDefault();
    console.log("Fetching Data");
    setStatus("Fetching Data");
    fetch(
      "https://api.weatherapi.com/v1/current.json?key=5321ef3cc9144aea8f8102536240804&q=auto:ip&aqi=yes",
      {
        method: "GET",
       
      },
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setValue("Weather is : " + data.current.condition.text + " in " + data.location.name + ", " + data.location.region + " and humidity is : " + data.current.humidity + " with temp " + data.current.temp_c + " C");
        console.log(data);
        console.log(value);
      })
      .catch((error) => {
        console.log("Error fetching data : ", error);
        setValue("Error fetching data: " + error);
      })
      .finally(() => {
        setStatus("");
      });
  };

  return (
    <main>
      <button onClick={myfunc}>Check Weather</button>
      <p>{status}</p>
      <p>{value}</p>
    </main>
  );
}

export default App
