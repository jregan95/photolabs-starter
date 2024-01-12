import { useState } from 'react';

const useId = (value) => {
  const [id, setId] = useState();

  const change = () => setId(value)

  return [id, change]
}
export default useId;
