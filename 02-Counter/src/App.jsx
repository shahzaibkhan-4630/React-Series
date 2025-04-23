import React, { useState } from "react";

const App = () => {
  const [value, setValue] = useState(5);

  const addValue = () => {
    if (value < 20) {
      setValue(value + 1);
    }
  };

  const removeValue = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center leading-14">
      <h1 className="text-5xl">React Series</h1>
      <h2>Counter Value: {value}</h2>
      <div className="flex gap-4">
        <button onClick={addValue} className="bg-gray-800 px-10 rounded-xl">
          Add Value: {value}
        </button>
        <button onClick={removeValue} className="bg-gray-800 px-10 rounded-xl">
          Remove Value: {value}
        </button>
      </div>
    </div>
  );
};

export default App;
