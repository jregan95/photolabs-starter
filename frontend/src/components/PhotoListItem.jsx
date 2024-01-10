import React from "react";

import "../styles/PhotoListItem.scss";



const PhotoListItem = (props) => {
  return (
    <div>
      <img src={props.photo}></img>
      <img src={props.profile}></img>
      <p>{props.username}</p>
      <p>{props.location} {props.city}</p>
    </div>
  )
};

export default PhotoListItem;
