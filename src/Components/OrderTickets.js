import React from "react";
import { useState } from "react";

export default function OrderTickets() {
  const [searchByTheater, setsearchByTheater] = useState(true); //false is for search by  movie
  return (
    <div className="p-4 w-full">
      <h2>Order Tickets</h2>
      <div className="m-auto w-max">
        <button
          onClick={() => {
            if (!searchByTheater) setsearchByTheater(true);
          }}
          className="border py-2 px-8">
          By Cinema
        </button>
        <button
          onClick={() => {
            if (searchByTheater) setsearchByTheater(false);
          }}
          className="border py-2 px-8">
          By Movie
        </button>
      </div>
      {/* search field */}
    </div>
  );
}
