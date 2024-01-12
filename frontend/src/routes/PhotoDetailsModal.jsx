import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';


const PhotoDetailsModal = (props) => {
  let photoObject = props.id.similar_photos 
  
  const newData = []
  for(let photo in photoObject) {
    newData.push(photoObject[photo])
  }

  console.log(newData)
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={props.modality}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className ="photo-list__item">
       <PhotoFavButton favData={props.favData} photo={props.id.id}/>
        <img className="photo-list__image" src={props.id.urls.regular}></img>
          <div className="photo-list__user-details">
             <img className="photo-list__user-profile"src={props.id.user.profile}></img>
                <div className="photo-list__user-info">
                  <div>{props.id.user.username}</div>
                  <div className="photo-list__user-location">{props.id.location.city} {props.id.location.country}</div>
                </div>  
          </div>
    </div>
      <PhotoList photoData={newData} favData={props.favData} setModality={props.setModality} setId={props.setId} />
  
    </div>
  )
};

export default PhotoDetailsModal;
