import React, { useState } from "react";
import "../styles/solluna.css";

function SolLuna() {
  const [isDay, setIsDay] = useState(true);

  const toggleTheme = () => {
    setIsDay(!isDay);
    const bodyElement = document.querySelector("body");
    if (bodyElement) {
      if (isDay) {
        bodyElement.classList.add("night-theme");
        bodyElement.classList.remove("day-theme");
      } else {
        bodyElement.classList.add("day-theme");
        bodyElement.classList.remove("night-theme");
      }
    }
  };

  return (
    <div className="solluna-container">
      <button className={`solluna-button ${isDay ? "day" : "night"}`} onClick={toggleTheme}>
        {isDay ? <i className='bx bxs-sun sunmoon' ></i> : <i className='bx bxs-moon moonson' ></i>}
      </button>
    </div>
  );
}

export default SolLuna;
