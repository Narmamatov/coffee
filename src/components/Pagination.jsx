import React from "react";
import Pagination from "@mui/material/Pagination";

export default function PaginationRounded() {
  return (
    <div className="pagination">
      <Pagination count={10} shape="rounded" />
      <Pagination count={10} variant="outlined" shape="rounded" />
    </div>
  );
}
