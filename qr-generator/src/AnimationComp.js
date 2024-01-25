import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import animationData from './animation.json';

function AnimationComp () {
  const containerRef = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: containerRef.current,
      renderer: 'svg',
      loop: false,
      autoplay: true,
      animationData: animationData
    });
  }, []);

  const containerStyle = {
    position: 'absolute',
    top: 300,
    right: -0,
    width: '100%',
    height: '100%',
    zIndex: -1,
    
  };

  return (
    <div style={containerStyle} ref={containerRef} />
  );
}

export default AnimationComp;