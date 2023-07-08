import { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [startValue, setStartValue] = useState("");
  const [editingStartValue, setEditingStartValue] = useState(false);
  const [counterName, setCounterName] = useState("Tally Counter");
  const [isEditingName, setIsEditingName] = useState(false);
  const [newCounterName, setNewCounterName] = useState("");

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = (num) => {
    {
      setCount(count - 1);
    }
  };

  const resetCount = () => {
    setCount(0);
  };

  const handleStartValueChange = (e) => {
    setStartValue(e.target.value);
  };

  const handleStartValueSubmit = () => {
    setCount(parseInt(startValue) || 0);
    setStartValue("");
    setEditingStartValue(false);
  };

  const toggleEditingStartValue = () => {
    setEditingStartValue(!editingStartValue);
  };

  const toggleEditMode = () => {
    setIsEditingName(!isEditingName);
    setNewCounterName("");
  };

  const handleCounterNameChange = (event) => {
    setNewCounterName(event.target.value);
  };

  const handleNameInputChange = () => {
    if (newCounterName.trim() !== "") {
      setCounterName(newCounterName);
      setIsEditingName(false);
    }
  };

  const handleNameInputSubmit = () => {
    setIsEditingName(true);
  };

  return (
    <div className="container">
      <div className="title">{counterName}</div>
      <input readOnly className="input" type="number" value={count} />
      <div>
        <button className="btn" onClick={incrementCount}>
          +
        </button>
        <button className="btn" onClick={decrementCount}>
          -
        </button>
      </div>
      <div className="button-container">
        <button onClick={resetCount} className="btn-second">
          Reset Counter
        </button>
        {editingStartValue ? (
          <div className="input-container">
            <input
              type="number"
              value={startValue}
              onChange={handleStartValueChange}
              className="start-value-input"
            />
            <button className="btn-set" onClick={handleStartValueSubmit}>
              Set
            </button>
          </div>
        ) : (
          <button className="btn-second" onClick={toggleEditingStartValue}>
            Start Value
          </button>
        )}
        <div>
          {isEditingName ? (
            <div className="input-container">
              <input
                type="text"
                value={newCounterName}
                onChange={handleCounterNameChange}
                className="start-value-input"
              />
              <button className="btn-set" onClick={handleNameInputChange}>
                Set
              </button>
            </div>
          ) : (
            <button className="btn-second" onClick={handleNameInputSubmit}>
              Counter Name
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Counter;
