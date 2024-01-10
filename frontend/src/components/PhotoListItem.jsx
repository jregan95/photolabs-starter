import React from "react";

import "../styles/PhotoListItem.scss";



const PhotoListItem = (props) => {
  return (
    <div className ="photo-list_item">
      <figure >
        <img className="photo-list__image" src={props.photo.imageSource}></img>
        <img className="photo-list__user-profile"src={props.photo.profile}></img>
      </figure>
      <figcaption className="photo-list__user-details">
        <p className="photo-list__user-info">{props.photo.username}</p>
        <p className="photo-list__user-location">{props.photo.location.city} {props.photo.location.country}</p>
      </figcaption>
    </div>
  )
};

export default PhotoListItem;
