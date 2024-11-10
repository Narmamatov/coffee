import React, { useState } from "react";

const Admin = ({ adminAdd }) => {
  const [setName, setStateName] = useState("");
  const [setPrice, setStatePrice] = useState("");
  const [setImg, setStateImg] = useState("");

  return (
    <div>
      <div className="name">
        <h1>CREATE PRODUCT</h1>
      </div>
      <div className="container">
        <div className="product">
          <input
            onChange={(e) => setStateName(e.target.value)}
            type="text"
            placeholder="Food name"
            id=""
          />
          <input
            onChange={(e) => setStatePrice(e.target.value)}
            type="text"
            placeholder="Food price"
            id=""
          />
          <input
            onChange={(e) => setStateImg(e.target.value)}
            type="text"
            placeholder="Food's image"
            id=""
          />
          <button
            onClick={() =>
              adminAdd({
                name: setName,
                price: setPrice,
                img: setImg,
              })
            }
          >
            Add new food
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
