import { useState } from 'react';

const usePhotoInfo = (value) => {
  
  const [photoInfo, setPhotoInfo] = useState(null);
 
  const change = (value) => setPhotoInfo(value)

  return [photoInfo, change]
}
export default usePhotoInfo;
