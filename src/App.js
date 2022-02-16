import randomLocation from "random-location";
import { useEffect, useState } from "react";
import "./styles.css";

const coordinates = {
  latitude: 14.5995,
  longitude: 120.9842
};

const distance = 5000;

export default function App() {
  const randomPoint = randomLocation.randomCirclePoint(coordinates, distance);
  console.log(randomPoint);

  return (
    <div className="App">
      <pre>{JSON.stringify(randomPoint, null, 4)}</pre>
    </div>
  );
}
