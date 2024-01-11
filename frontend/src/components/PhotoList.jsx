import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from './PhotoListItem';


const PhotoList = (props) => {
 
  const displayPhotoListItems = (data) => {
    return data.map((photo) => {
     return <PhotoListItem key={photo.id} photo={photo} />
    })
  }

  return (
    <ul className="top-nav-bar__topic-list">
      {displayPhotoListItems(props.photoData)}
    </ul>
  );
};


export default PhotoList;
