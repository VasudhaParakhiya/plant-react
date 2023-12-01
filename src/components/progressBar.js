import React, { useState, useEffect } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function ProgressBar() {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (percentage < 60) {
        setPercentage(percentage + 1);
      }
    }, 50);
  }, [percentage]);

  return (
    <div className="app">
      <h4>
        Circular progress bar in React -{" "}
        <a href="https://www.cluemediator.com" target="_blank" rel="noopener">
          Clue Mediator
        </a>
      </h4>
      <div style={{ width: 150, marginLeft: 70 }}>
        <CircularProgressbar value={percentage} text={`${percentage}%`} />
      </div>
    </div>
  );
}

export default ProgressBar;
