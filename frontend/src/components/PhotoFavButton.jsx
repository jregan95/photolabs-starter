import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  
  const [heart, setHeart] = useState(false)
  const like = function() {
    return (
      heart === false ? setHeart(true) : setHeart(false)
    )
  }
  

  const handleClick = () => {
    like();
    props.favData(props.photo);
  }
  return (
    <div className="photo-list__fav-icon">
      <div onClick={handleClick} className="photo-list__fav-icon-svg">
        
          <FavIcon displayAlert={heart} selected={heart}/>
        
      </div>
    </div>
  );
}

export default PhotoFavButton;