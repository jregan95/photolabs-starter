import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from './PhotoListItem';


const PhotoList = (props) => {
 
  const displayPhotoListItems = (data, favData) => {
    
    return data.map((photo) => {
     return <PhotoListItem key={photo.id} photo={photo} favData={favData} />
    })
  }

  return (
    <ul className="top-nav-bar__topic-list">
      {displayPhotoListItems(props.photoData, props.favData)}
    </ul>
  );
};


export default PhotoList;
