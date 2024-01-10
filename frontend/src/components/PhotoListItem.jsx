import React from "react";

import "../styles/PhotoListItem.scss";



const PhotoListItem = (props) => {
  return (
    <div>
      <img src={props.photo.imageSource}></img>
      <img src={props.photo.profile}></img>
      <p>{props.photo.username}</p>
      <p>{props.photo.location.city} {props.photo.location.country}</p>
    </div>
  )
};

export default PhotoListItem;
