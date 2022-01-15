import {useEffect, useRef} from 'react'
export default function Map() {
    const ref = useRef();
  
    useEffect(() => {
      new window.google.maps.Map(ref.current, {
        zoom: 1,
      });
    });
  
    return <div ref={ref} id="map" />;
  }

  