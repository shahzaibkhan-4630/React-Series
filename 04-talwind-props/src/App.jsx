import React from "react";
import Card from "./components/Card";

function App() {
  let myObj = {
    username: "hitesh",
    age: 21,
  };
  let newArr = [1, 2, 3];

  return (
    <>
      <div className="flex items-center gap-5 justify-center h-screen">
        {/* <Card username="Lauren" btnText="click me" someObject={myobj} /> */}
        {/* <Card username="Lauren" btnText="click me" someObject={newArr} /> */}
        <Card username="Lauren" btnText="click me" />
        <Card username="SK" />
      </div>
    </>
  );
}

export default App;
