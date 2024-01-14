import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  
  const {favData, photo, favourited} = props
 
  
  //Will set the state of the heart from empty to full when 'liked'
  const [heart, setHeart] = useState(false)

  //Sets heart to true if it is false or vice versa
  const like = function() {
    return (
      heart === false ? setHeart(true) : setHeart(false)
    )
  }
  
  //On click of the heart it will call the like function as well as push the image id into the favourites data
  const handleClick = () => {
    like();
    favData(photo);
  }

  
  return (
    <div className="photo-list__fav-icon">
      <div onClick={handleClick} className="photo-list__fav-icon-svg">
          <FavIcon  selected={heart}/>
      </div>
    </div>
  );

}

export default PhotoFavButton;