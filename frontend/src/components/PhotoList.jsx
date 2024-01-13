import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from './PhotoListItem';



const PhotoList = (props) => {

  const {photoData, favData, setOpenModal, setPhotoInfo} = props
  
  //Function to render invidual photo items based on the data
  const displayPhotoListItems = (data, favData, setModality, setPhotoInfo) => {
    return data.map((photo) => {
     return <PhotoListItem key={photo.id} photo={photo} favData={favData} setModality={setModality} setPhotoInfo={setPhotoInfo}/>
    })
  }

  return (
    <div className="top-nav-bar__topic-list">
      <div>
      {displayPhotoListItems(photoData, favData, setOpenModal, setPhotoInfo)}
      </div>
    </div>
  );

};


export default PhotoList;
