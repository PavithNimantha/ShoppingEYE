import React from 'react';
import { Pannellum } from "pannellum-react";
import thirdfloor from '../../images/thirdfloor.jpg'

const ThirdFloor = () => {
  return (
    <Pannellum
    width=""
    height=""
    image={thirdfloor}
    pitch={10}
    yaw={180}
    hfov={110}
    autoLoad
    showZoomCtrl={false}
  >
  </Pannellum>
  )
}

export default ThirdFloor