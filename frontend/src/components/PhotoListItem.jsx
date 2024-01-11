import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";



const PhotoListItem = (props) => {
  console.log(props)
  return (
    <div className ="photo-list__item">
       <PhotoFavButton/>
        <img className="photo-list__image" src={props.photo.urls.regular}></img>
         
          <div className="photo-list__user-details">
    
             <img className="photo-list__user-profile"src={props.photo.profile}></img>
             
                <div className="photo-list__user-info">
                  <div>{props.photo.username}</div>
                  <div className="photo-list__user-location">{props.photo.location.city} {props.photo.location.country}</div>
                </div>
                
          </div>
    </div>
  )
};

export default PhotoListItem;
