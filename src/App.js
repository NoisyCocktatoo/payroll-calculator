import React from "react";
import Navbar from "./components/Navbar";
import Main from "./pages/Main";

const App = () => {
  return (
    <div className="h-screen w-full bg-gray-300 flex flex-col items-center">
      <Navbar />
      <Main />
    </div>
  );
};

export default App;
