import { useEffect, useState } from "react";

const useGetWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }, [windowWidth]);
  return { windowWidth };
};

export default useGetWindowWidth;
