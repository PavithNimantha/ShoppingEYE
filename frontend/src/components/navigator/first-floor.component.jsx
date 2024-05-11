import React from 'react';
import { Pannellum } from "pannellum-react";
import firstfloor from '../../images/firstfloor.jpg'

const FirstFloor = () => {


  return (
<Pannellum
  width=""
  height=""
  image={firstfloor}
  pitch={1}
  yaw={180}
  hfov={110}
  autoLoad
  showZoomCtrl={false}
>
    <Pannellum.Hotspot
        type="info"
        pitch={11}
        yaw={-167}
        text="Info Hotspot Text 3"
        URL="https://github.com/farminf/pannellum-react"
        />
        
</Pannellum>
  );
};

export default FirstFloor;
