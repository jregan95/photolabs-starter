import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';


const PhotoDetailsModal = (props) => {
  
  const modalPhoto = props.photoInfo
  let photosObject = modalPhoto.similar_photos || {};
 
  //Turns similar photos object into an array
  const similarPhotosArray = Object.values(photosObject);
  

  
  return (
    <div className="photo-details-modal">

      <button className="photo-details-modal__close-button" onClick={props.setOpenModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <div className="photo-details-modal__top-bar">
        <div>
          <PhotoFavButton favData={props.favData} photo={modalPhoto.id}/>
            <img className="photo-details-modal__image" src={modalPhoto.urls.full}></img>
              <div className="photo-details-modal__header">
                <img className="photo-details-modal__photographer-profile"src={modalPhoto.user.profile}></img>
                <div className="photo-details-modal__photographer-details">
                    <div className="photo-details-modal__photographer-info">
                      <div>{modalPhoto.user.username}</div>
                      <div className="photo-details-modal__photographer-location">{modalPhoto.location.city} {modalPhoto.location.country}</div>
                      </div>
                    </div>  
              </div>
          </div>
      </div>

      <div className="photo-details-modal__header">
        Similar Photos
      </div>

      <div className="photo-details-modal__images"> 
        <PhotoList photoData={similarPhotosArray} favData={props.favData} setOpenModal={props.setOpenModal} setPhotoInfo={props.setPhotoInfo} />
      </div>

    </div>
  )
};

export default PhotoDetailsModal;
