import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";

const Manu = ({ manuAdd, data }) => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    manuAdd();
  }, []);

  const startIndex = (page - 1) * itemsPerPage;
  const currentItems = data
    ? data.slice(startIndex, startIndex + itemsPerPage)
    : [];

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <div>
      <div className="name">
        <h1>MENU</h1>
      </div>
      <div className="container">
        <div className="food-box">
          {currentItems.map((el, idx) => (
            <div key={idx} className="food">
              <img src={el.img} alt="" />
              <h1>{el.name}</h1>
              <p>{el.price}$</p>
            </div>
          ))}
        </div>
        <div className="pagination">
          <Pagination
            count={data ? Math.ceil(data.length / itemsPerPage) : 0}
            page={page}
            onChange={handleChange}
            variant="outlined"
            shape="rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default Manu;
