import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../Hooks/useFetch";
import ReactMarkdown from "react-markdown";

export default function RecapDetails() {
  const { id } = useParams();
  const { loading, error, data } = useFetch(
    "https://eilon.up.railway.app/api/recaps/" + id + "?populate=*"
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div
      className="recap-details"
      style={{
        background: `url(${data.data.attributes.img.data.attributes.url})`,
        backgroundSize: "cover",
      }}
    >
      <div className="opacity-container">
        <div className="recap-details-container inner-container">
          <h2>{data.data.attributes.title}</h2>
          <ReactMarkdown className="recap-description">
            {data.data.attributes.description}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
