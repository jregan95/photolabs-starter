import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";



const PhotoListItem = (props) => {
  
  const {favData, photo, setModality, setPhotoInfo } = props
  
  //Fucntion to open the modal (or close it) and function to grab photo data for clicked on photo
  const handleClick = (id) => {
    setModality();
    setPhotoInfo(id);
  }
  
  return (
    
    <div className ="photo-list__item">
      <div>
       <PhotoFavButton favData={favData} photo={photo.id}/>
        <img onClick={() => handleClick(photo)} className="photo-list__image" src={photo.urls.full}></img>
        </div>
        <div>
          <div className="photo-list__user-details">
             <img className="photo-list__user-profile"src={photo.user.profile}></img>
                <div className="photo-list__user-info">
                  <div>{photo.user.username}</div>
                  <div className="photo-list__user-location">{photo.location.city} {photo.location.country}</div>
                </div>  
                </div>
          </div>
          
    </div>
    
  )
};

export default PhotoListItem;
