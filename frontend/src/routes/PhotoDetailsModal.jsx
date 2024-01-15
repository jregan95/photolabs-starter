import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';


const PhotoDetailsModal = (props) => {
  
  //Declares variable for Modal Photo
  const modalPhoto = props.photoInfo
  //PhotosObject is the object of similar photos. If error it will be an empty array
  let photosObject = modalPhoto.similar_photos || {};
  //SimilarPhotosArray turns the object of photos into an array
  const similarPhotosArray = Object.values(photosObject);
  
  const {favData, like, ifPhotoShouldHaveHeart, setOpenModal, setPhotoInfo} = props

  
  return (
    <div className="photo-details-modal">

      <button className="photo-details-modal__close-button" onClick={props.setOpenModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <div className="photo-details-modal__top-bar">
        <div>
          <PhotoFavButton favData={favData} photo={modalPhoto.id} like={like} ifPhotoShouldHaveHeart={ifPhotoShouldHaveHeart}/>
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
        <PhotoList 
        photoData={similarPhotosArray} 
        favData={favData} 
        setOpenModal={setOpenModal} 
        setPhotoInfo={setPhotoInfo} 
        like={like} 
        ifPhotoShouldHaveHeart={ifPhotoShouldHaveHeart}/>
      </div>

    </div>
  )
};

export default PhotoDetailsModal;
