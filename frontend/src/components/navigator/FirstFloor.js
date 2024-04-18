import React from 'react';
import { Pannellum } from "pannellum-react";
import firstfloor from '../../images/firstfloor.jpg'

const FirstFloor = () => {


  return (
<Pannellum
  width=""
  height=""
  image={firstfloor}
  pitch={10}
  yaw={180}
  hfov={110}
  autoLoad
  showZoomCtrl={false}
>
</Pannellum>
  );
};

export default FirstFloor;
