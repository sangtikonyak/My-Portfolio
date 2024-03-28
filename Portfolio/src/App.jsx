import { useState } from "react";

import "./App.css";

import Header from "./Component/Header";
import { Outlet } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
