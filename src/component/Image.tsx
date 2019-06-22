import React from "react";

interface ImageProps {
  src: string;
  height: number;
  width: number;
  x: number;
  y: number;
}

const Image: React.FC<ImageProps> = ({ src, width, height }) => {
  return <img src={src} width={width} height={height} alt="hmm." />;
};

export default Image;
