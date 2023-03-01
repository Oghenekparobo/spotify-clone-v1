import React from "react";
import "./songrow.css";

function Songrow({ track }) {
    console.log(track)
  return (
    <div className="songrow">
     <img src={track.album.images[0].url} alt="" />
      <div className="songrow_info">
        <h1>{track.name}</h1>
        {`${track.artists.map((artist) => artist.name).join(",")} - ${
          track.album.name
        }`}
      </div>
    </div>
  );
}

export default Songrow;
