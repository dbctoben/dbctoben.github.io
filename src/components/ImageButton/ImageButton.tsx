import React from 'react';
import { ImageButtonProps } from '../../@types/types';

const ImageButton: React.FC<ImageButtonProps> = ({ href, className, src, imageWidth, imageHeight, alt, onClick }) => {
  return (
    <a href={href} className={className} onClick={onClick}>
      <img src={src} alt={alt} width={imageWidth} height={imageHeight} />
    </a>
  );
};

export default ImageButton;
