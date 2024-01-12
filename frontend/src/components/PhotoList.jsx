import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from './PhotoListItem';


const PhotoList = (props) => {
 
  const displayPhotoListItems = (data, favData, setModality, setId) => {
   
    return data.map((photo) => {
     return <PhotoListItem key={photo.id} photo={photo} favData={favData} setModality={setModality} setId={setId}/>
    })
  }

  return (
    <ul className="top-nav-bar__topic-list">
      {displayPhotoListItems(props.photoData, props.favData, props.setModality, props.setId)}
    </ul>
  );
};


export default PhotoList;
