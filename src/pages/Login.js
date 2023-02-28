import React from 'react';

import { loginUrl } from "../utils/spotify";
import "./login.css";

function Login() {
  return (
    <div className="login">
      {/* spotify logo */}
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      {/* spotify logging link*/}
      <a href={loginUrl}>login with spotify</a>
    </div>
  );
}

export default Login;
