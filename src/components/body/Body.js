import React from "react";
import { useDataLayerValue } from "../../context/DataLayer";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Header from "../header/Header";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import "./body.css";
import Songrow from "../songrow/Songrow";

function Body({ spotify }) {
  const [{ discover_weekly }] = useDataLayerValue();
  return (
    <section className="body">
      <Header spotify={spotify} />
      <div className="body_info">
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='150' y1='0' x2='150' y2='300'%3E%3Cstop offset='0' stop-color='%23ff8a00'/%3E%3Cstop offset='1' stop-color='%23e52e71'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='300' height='300'/%3E%3C/svg%3E"
          alt=""
        />
        <div className="body_infoText">
          <strong>Playlists</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly && discover_weekly.description}</p>
        </div>
      </div>
      <div className="body_songs">
        <div className="body_icons">
          <PlayCircleFilledIcon className="body_shuffle" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
        <div className="song_lists">
          {discover_weekly &&
            discover_weekly.tracks &&
            discover_weekly.tracks.items &&
            discover_weekly.tracks.items.map((item) => (
              <Songrow key={item.track.id} track={item.track} />
            ))}
        </div>
      </div>
    </section>
  );
}

export default Body;
