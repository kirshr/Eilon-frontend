import React from "react";
import useFetch from "../Hooks/useFetch";
import { Link } from "react-router-dom";
export default function NPCs() {
  const { loading, error, data } = useFetch(
    "https://eilon.up.railway.app/api/npcs?populate=*"
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div className="npcs inner-container">
      <h2>NPCs</h2>
      {data.data.map((npcs) => (
        <Link to={"/npcDetails/" + npcs.id}>
          <div
            className="card npc-card"
            style={{
              background: `url(${npcs.attributes.img.data.attributes.url})`,
              backgroundSize: "cover",
            }}
          >
            <h2>{npcs.attributes.title}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
}
