import React from 'react';

import Body from "../components/body/Body";
import Footer from "../components/footer/Footer";
import Sidebar from "../components/sidebar/Sidebar";
import "./player.css";

function Player({spotify}) {
  return (
    <section className="player">
      <div className="player_body">
        {/* sidebar */}
        <Sidebar />
        {/* body */}
        <Body spotify={spotify} />
      </div>
      {/* footer */}

      <Footer />
    </section>
  );
}

export default Player;
