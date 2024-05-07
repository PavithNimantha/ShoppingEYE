import React from 'react';
import { Pannellum } from "pannellum-react";
import groundfloor from '../../images/groundfloor.jpg'

const GroundFloor = () => {


  return (
<Pannellum
  width=""
  height=""
  image={groundfloor}
  pitch={10}
  yaw={180}
  hfov={110}
  autoLoad
  showZoomCtrl={false}
>
</Pannellum>
  );
};

export default GroundFloor;
