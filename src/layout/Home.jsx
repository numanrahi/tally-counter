import React, { useState, useEffect } from "react";
import Counter from "../components/Counter";
import "./Home.css";

const Home = () => {
  const [counters, setCounters] = useState([]);

  const addCounter = () => {
    setCounters([...counters, {}]);
  };

  const deleteCounter = (index) => {
    const updatedCounters = [...counters];
    updatedCounters.splice(index, 1);
    setCounters(updatedCounters);
  };

  useEffect(() => {
    addCounter();
  }, []);

  return (
    <div>
      <div className="home-title">Free Online Tally Counter</div>
      <div>
        <button onClick={addCounter} className="add-btn">
          Add Counter
        </button>
      </div>
      <div className="counter-container">
        {counters.map((counter, index) => (
          <Counter key={index} onDelete={() => deleteCounter(index)} />
        ))}
      </div>
    </div>
  );
};

export default Home;
