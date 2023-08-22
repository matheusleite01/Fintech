import React from "react";
import "./style.css";
import Resumo from "./Pages/Resumo";
import Header from "./Components/Header";
import Sidenav from "./Components/Sidenav";
import { DataContextProvider } from "./Context/DataContext";

const App = () => {
  return (
    <DataContextProvider>
      <div>
        <Resumo />
        <main>
          <Header />
          <Sidenav />
        </main>
      </div>
    </DataContextProvider>
  );
};

export default App;
