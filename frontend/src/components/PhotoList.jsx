import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from './PhotoListItem';


const PhotoList = (props) => {
 
  const displayPhotoListItems = (data, favData, setModality) => {
    
    return data.map((photo) => {
     return <PhotoListItem key={photo.id} photo={photo} favData={favData} setModality={setModality} />
    })
  }

  return (
    <ul className="top-nav-bar__topic-list">
      {displayPhotoListItems(props.photoData, props.favData, props.setModality)}
    </ul>
  );
};


export default PhotoList;
