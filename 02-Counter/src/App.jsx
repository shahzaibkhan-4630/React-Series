// import React, { useState } from "react";

// const App = () => {
//   const [value, setValue] = useState(5);

//   const addValue = () => {
//     if (value < 20) {
//       setValue(value + 1);
//     }
//   };

//   const removeValue = () => {
//     if (value > 0) {
//       setValue(value - 1);
//     }
//   };

//   return (
//     <div className="w-full h-screen flex flex-col items-center justify-center leading-14">
//       <h1 className="text-5xl">React Series</h1>
//       <h2>Counter Value: {value}</h2>
//       <div className="flex gap-4">
//         <button onClick={addValue} className="bg-gray-800 px-10 rounded-xl">
//           Add Value: {value}
//         </button>
//         <button onClick={removeValue} className="bg-gray-800 px-10 rounded-xl">
//           Remove Value: {value}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default App;

import React from "react";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(15);

  //let counter = 15

  const addValue = () => {
    //counter = counter + 1
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  };

  const removeValue = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <div className="w-full h-screen flex flex-col items-center justify-center">
        <h1 className="text-5xl leading-16">React Series</h1>
        <h2 className="leading-16">Counter value: {counter}</h2>
        <div className="flex gap-4 mb-4">
          <button
            className="bg-gray-800 px-10 py-3 rounded-xl"
            onClick={addValue}
          >
            Add value {counter}
          </button>
          <button
            className="bg-gray-800 px-10 py-3 rounded-xl"
            onClick={removeValue}
          >
            remove value {counter}
          </button>
        </div>
        <p>footer: {counter}</p>
      </div>
    </>
  );
}

export default App;
