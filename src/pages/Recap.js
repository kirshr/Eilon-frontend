import React from "react";
import useFetch from "../Hooks/useFetch";
import { Link } from "react-router-dom";

export default function Recap() {
  const { loading, error, data } = useFetch(
    "https://eilon.up.railway.app/api/recaps?populate=*"
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div className="recap inner-container">
      <h2>Recap</h2>
      {data.data.map((recap) => (
        <Link to={"/RecapDetails/" + recap.id}>
          <div
            className="card recap-card"
            key={recap.id}
            style={{
              background: `url(${recap.attributes.img.data.attributes.url})`,
              backgroundSize: "cover",
            }}
          >
            {console.log(recap.id)}
            <h2>{recap.attributes.title}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
}
