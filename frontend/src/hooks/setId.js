import { useState } from 'react';

const useId = (value) => {
  
  const [id, setId] = useState(null);
  //console.log('Setting id:', value);
  const change = (value) => setId(value)

  return [id, change]
}
export default useId;
