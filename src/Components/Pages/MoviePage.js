import React from "react";
import Navbar from "../Navbar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Apis from "../../Literals/Apis";

export default function MoviePage() {
  const [movieData, setMovieData] = useState({});

  const params = useParams();
  const fetchMovie = async () => {
    try {
      const resp = await axios.get(`${Apis.Movies}/${params.id}`);
      setMovieData(resp.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <div>
      <Navbar />
      <h1>{movieData.name}</h1>
    </div>
  );
}
