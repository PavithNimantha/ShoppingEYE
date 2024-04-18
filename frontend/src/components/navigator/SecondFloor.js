import React from 'react';
import { Pannellum } from "pannellum-react";
import secondfloor from '../../images/secondfloor.jpg'

const SecondFloor = () => {
  return (
    <Pannellum
  width=""
  height=""
  image={secondfloor}
  pitch={10}
  yaw={180}
  hfov={110}
  autoLoad
  showZoomCtrl={false}
>
</Pannellum>
  )
}

export default SecondFloor