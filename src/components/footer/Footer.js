import "./footer.css";
import React from "react";

import ShuffleOnIcon from "@mui/icons-material/ShuffleOn";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import RepeatIcon from "@mui/icons-material/Repeat";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import Slider from "@mui/material/Slider";
import Grid from "@mui/material/Grid";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";

function Footer() {
  return (
    <section className="footer">
      <div className="footer_left">
        <img
          className="footer_albumlogo"
          src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
          alt="sidebar__logo "
        />
        <div className="footer_songinfo">
          <h4>hi</h4>
          <p>nnnn</p>
        </div>
      </div>
      <div className="footer_center">
        <ShuffleOnIcon className="footer_green" />
        <SkipPreviousIcon className="footer_icon" />
        <PlayCircleFilledIcon fontSize="large" className="footer_icon" />
        <SkipNextIcon className="footer_icon" />
        <RepeatIcon className="footer_green" />
      </div>
      <div className="footer_right">
        <Grid container spacing={2}>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item>
            <PlaylistAddIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider sx={{ width: 100 }} defaultValue={30} />
          </Grid>
        </Grid>
      </div>
    </section>
  );
}

export default Footer;
