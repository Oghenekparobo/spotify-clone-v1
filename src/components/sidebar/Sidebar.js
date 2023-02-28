import React from "react";
import "./sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import { useDataLayerValue } from "../../context/DataLayer";

function Sidebar() {
  const [{ playlists }] = useDataLayerValue();

  return (
    <section className="sidebar">
      <img
        className="sidebar_logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="sidebar__logo "
      />
      <SidebarOption title="Home" Icon={HomeIcon} />
      <SidebarOption title="Search" Icon={SearchIcon} />
      <SidebarOption title="Your Library" Icon={LibraryMusicIcon} />

      <br />
      <strong className="sidebar_title">Playlists</strong>
      <hr />
      {playlists &&
        playlists.items &&
        playlists.items.map((playlist) => (
          <SidebarOption key={playlist.id} title={playlist.name} />
        ))}

      {/* {playlists?.items?.map((playlist) => (
        // <SidebarOption key={playlist.id} title={playlist.name} />
        
      ))} */}
    </section>
  );
}

export default Sidebar;
