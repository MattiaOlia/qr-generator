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
    position: 'fixed',
    top: -50,
    right: -450,
    width: '150%',
    height: '150%',
    zIndex: -1,
    transform: "rotate(45deg)"
  };

  return (
    <div style={containerStyle} ref={containerRef} />
  );
}

export default AnimationComp;