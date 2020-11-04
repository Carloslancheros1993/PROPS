import React from "react";
import homeIcon from "../icons/iconfinder_ic_home_48px_3669170.png";
import fireIcon from "../icons/iconfinder_Icon_Element_Fire_03_513726.png";
import playlist from "../icons/iconfinder_ic_playlist_play_48px_3669290.png";
import subscriptionsIcon from "../icons/iconfinder_ic_subscriptions_48px_3669213.png";

export default function Icon(props) {
  return (
    <div className="icon">
      <div className="icon-img">
      <img src={homeIcon} alt="icon" title="Principal" />Principal
      </div>
      <div className="icon-img">
      <img src={fireIcon} alt="icon" title="Principal" />Tendencias
      </div>
      <div className="icon-img">
      <img src={subscriptionsIcon} alt="icon" title="Principal" />Suscriptores
      </div>
      <div className="icon-img">
      <img src={playlist} alt="icon" title="Principal" />Biblioteca
      </div>
    </div>
  );
}
