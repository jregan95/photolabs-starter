import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from './PhotoListItem';



const PhotoList = (props) => {

  const {photoData, favData, setOpenModal, setPhotoInfo, like, ifPhotoShouldHaveHeart} = props
  
  //Function to render invidual photo items based on the data
  const displayPhotoListItems = (data, favData, setModality, setPhotoInfo, ifPhotoShouldHaveHeart, like) => {
    return data.map((photo) => {
     return <PhotoListItem key={photo.id} photo={photo} favData={favData} setModality={setModality} setPhotoInfo={setPhotoInfo} ifPhotoShouldHaveHeart={ifPhotoShouldHaveHeart} like={like}/>
    })
  }

  return (
    <div className="photo-list">
      
      {displayPhotoListItems(photoData, favData, setOpenModal, setPhotoInfo, ifPhotoShouldHaveHeart, like)}
      
    </div>
  );

};


export default PhotoList;
