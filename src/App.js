import React from 'react';

import { useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./context/DataLayer";
import Login from "./pages/Login";
import Player from "./pages/Player";
import { getTokenFromUrl } from "./utils/spotify";

const spotify = new SpotifyWebApi();

function App() {
  // const [token, setToken] = useState(null);
  const [{ user, token , playlists}, dispatch] = useDataLayerValue();

  useEffect(() => {
    // auth object gotten from spotify authentication
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    // console.log(_token);

    if (_token) {
      // setToken(_token);

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      // send token to spotify api
      spotify.setAccessToken(_token);
      // console.log(_token);

      // get current spotify user
      spotify.getMe().then((user) => {
        // console.log(user);
        dispatch({
          type: "SET_USER",
          user: user,
        });

        // get user spotify playlists
        spotify.getUserPlaylists().then((playlists) => {
          dispatch({
            type: "SET_PLAYLISTS",
            playlists: playlists,
          });
        });
      });
    }

  }, [dispatch, user]);


  console.log(playlists + 'play');
  return <div className="App">{!token ? <Login /> : <Player />}</div>;
}

export default App;
