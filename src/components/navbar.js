import React from "react";
import Login from "./login";
import SearchBar from "./search-bar";
import Logo from "./logo";

/* Importar los componentes */

/* Importar los iconos */

export default function Navbar(props) {
  return (
    <div className="navbar">
      <Logo/>
      <div>
        <SearchBar />
      </div>
      <div className="nav-img">
        <img src={require("../icons/iconfinder_ic_video_call_48px_3669144.png")}alt="video"/>
      </div>
      <div className="nav-img">
        <img
          src={require("../icons/iconfinder_ic_view_module_48px_3669149.png")}alt="screen"/>
      </div>
      <div className="nav-img">
        <img src={require("../icons/iconfinder_icon-ios7-bell_211694.png")}alt="alert" />
      </div>
      <div>
        <Login />
      </div>
    </div>
  );
}
