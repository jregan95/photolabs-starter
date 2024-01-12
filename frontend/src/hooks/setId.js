import { useState } from 'react';

const useId = (value) => {
  
  const [id, setId] = useState(null);
 
  const change = (value) => setId(value)

  return [id, change]
}
export default useId;
