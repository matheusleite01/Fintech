import React from "react";
import "./style.css";
import Resumo from "./Pages/Resumo";
import Header from "./Components/Header";
import Sidenav from "./Components/Sidenav";

const App = () => {
  return (
    <div>
      <Resumo />
      <main>
        <Header />
        <Sidenav />
      </main>
    </div>
  );
};

export default App;
