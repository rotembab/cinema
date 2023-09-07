import React from "react";
import Navbar from "../Navbar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Apis from "../../Literals/Apis";

export default function MoviePage() {
  return (
    <div>
      <Navbar />
      <h1>{}</h1>

      <button className="bg-orange-500 py-2 px-4 m-auto ">
        Buy tickets now!
      </button>
    </div>
  );
}
