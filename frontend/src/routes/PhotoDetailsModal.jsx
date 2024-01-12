import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';


const PhotoDetailsModal = (props) => {
  
  const modalPhoto = props.photoInfo
  let photoObject = modalPhoto.similar_photos 
 
  
  const newData = []
  for(let photo in photoObject) {
    newData.push(photoObject[photo])
  }

  console.log(newData)
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={props.setOpenModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className ="photo-list__item">
       <PhotoFavButton favData={props.favData} photo={modalPhoto.id}/>
        <img className="photo-list__image" src={modalPhoto.urls.regular}></img>
          <div className="photo-list__user-details">
             <img className="photo-list__user-profile"src={modalPhoto.user.profile}></img>
                <div className="photo-list__user-info">
                  <div>{modalPhoto.user.username}</div>
                  <div className="photo-list__user-location">{modalPhoto.location.city} {modalPhoto.location.country}</div>
                </div>  
          </div>
    </div>
      <PhotoList photoData={newData} favData={props.favData} setOpenModal={props.setOpenModal} setPhotoInfo={props.setPhotoInfo} />
  
    </div>
  )
};

export default PhotoDetailsModal;
