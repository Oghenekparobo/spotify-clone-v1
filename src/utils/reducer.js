export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token: localStorage.getItem("TOKEN_KEY") || null,
  // token:
  //   "BQAfVE7XTI7BDU2dwsSVFVa45_fxy693UKUhhEcOL-mZG_ARoNNb2KHQ3gPIwng01T_m4I5-Wt8TgYp-ZraYEGb2WmArGBtl4jGTdeOIZ7-t0HcWscOZ5lh2mogs0mp3LaKeM0wZWciZBEGK55NQhsmn-BoyraGbxeJA3H4uTA_RgIfK_nL-T6X75NDPbtBdlz4_ISLKpWs5M7v1FkD8iAJX-g",
};

const reducer = (state, action) => {
  // console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      // console.log(action.token)
      localStorage.setItem("TOKEN_KEY", action.token);
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    default:
      return state;
  }
};

export default reducer;
