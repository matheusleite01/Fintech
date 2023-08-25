import React from "react";
import "./style.css";
import Resumo from "./Pages/Resumo";
import Header from "./Components/Header";
import Sidenav from "./Components/Sidenav";
import { DataContextProvider } from "./Context/DataContext";
import Vendas from "./Pages/Vendas";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Venda from "./Pages/Venda";

const App = () => {
  return (
    <BrowserRouter>
      <DataContextProvider>
        <div className="container">
          <Sidenav />
          <main>
            <Header />
            <Routes>
              <Route path="/" element={<Resumo />} />
              <Route path="/vendas" element={<Vendas />} />
              <Route path="/vendas/:id" element={<Venda />} />
            </Routes>
          </main>
        </div>
      </DataContextProvider>
    </BrowserRouter>
  );
};

export default App;
