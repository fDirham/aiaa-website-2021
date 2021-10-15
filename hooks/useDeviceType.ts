import { useEffect, useState } from "react";
import * as screenSize from "utilities/screenSize";

export default function useDeviceType() {
  const [device, setDevice] = useState("laptop");
  useEffect(() => {
    function updateSize() {
      let newDevice = "laptop";
      if (window.innerWidth <= screenSize.tablet) newDevice = "tablet";
      if (window.innerWidth <= screenSize.mobile) newDevice = "mobile";
      setDevice(newDevice);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return device;
}
