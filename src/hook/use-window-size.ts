import { useState, useLayoutEffect } from "react";

const useWindowSize = () => {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  useLayoutEffect(() => {
    const resizeCheck = () => {
      setHeight(window.innerHeight);
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", resizeCheck);
    resizeCheck();
    return () => {
      window.removeEventListener("resize", resizeCheck);
    };
  }, []);

  return [height, width];
};

export default useWindowSize;
