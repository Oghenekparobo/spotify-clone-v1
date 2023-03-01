import React from "react";
import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import Avatar from "@mui/material/Avatar";
import { useDataLayerValue } from "../../context/DataLayer";

function Header() {
  const [{ user }] = useDataLayerValue();
  return (
    <section className="header">
      <div className="header_left">
        <SearchIcon />
        <input
          type="text"
          placeholder="search for artists, songs and podcast"
        />
      </div>
      <div className="header_right">
        {user && user.images && user.images[0] && (
          <Avatar src={user.images[0].url} alt={user.display_name} />
        )}

        {user && user.display_name && <h4>{user.display_name}</h4>}
      </div>
    </section>
  );
}

export default Header;
