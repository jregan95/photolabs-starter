import { useState } from 'react';

const useTrue = () => {
  const [isTrue, setIsTrue] = useState(false);

  const toggle = () => setIsTrue(!isTrue);

  return [isTrue, toggle];

}


export default useTrue;