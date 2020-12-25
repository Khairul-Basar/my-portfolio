import React, {useEffect,useState} from 'react';

function useStartAnimation() {
  const [animated, setAnimated] = useState(false)
    useEffect(() => {
      setAnimated(true)
    }, []);
  return animated;
}

export default useStartAnimation;