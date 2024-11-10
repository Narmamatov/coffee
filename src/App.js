import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Manu from "./components/Manu";
import Order from "./components/Order";
import Admin from "./components/Admin";
import { useState } from "react";

function App() {
  const [data, setData] = useState();
  function adminAdd(newFood) {
    let data = JSON.parse(localStorage.getItem("data")) || [];
    data.push(newFood);
    localStorage.setItem("data", JSON.stringify(data));
  }
  function manuAdd() {
    let data = JSON.parse(localStorage.getItem("data")) || [];
    setData(data);
  }
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Manu manuAdd={manuAdd} data={data} />} />
        <Route path="/order" element={<Order />} />
        <Route path="/admin" element={<Admin adminAdd={adminAdd} />} />
      </Routes>
    </div>
  );
}

export default App;
