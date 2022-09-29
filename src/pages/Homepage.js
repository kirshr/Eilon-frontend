import React from "react";

//pages
import Recap from "../pages/Recap";
export default function Homepage() {
  return (
    <div className="homepage">
      <div className="video-banner">
        <video
          className="video-bg"
          src="https://res.cloudinary.com/dutnt78u3/video/upload/v1664222940/gw2vide_1_c1f5339d68.mp4?updated_at=2022-09-26T20:09:09.383Z"
          autoPlay="autoplay"
          muted
          loop
        />
        <h1>Eilon The Dark Continent</h1>
      </div>
      <Recap />
    </div>
  );
}
