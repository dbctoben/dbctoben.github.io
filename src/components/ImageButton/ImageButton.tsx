import React from 'react';
import { ImageButtonProps } from '../../consts/types';

const ImageButton: React.FC<ImageButtonProps> = ({ href, className, src, imageWidth, imageHeight, alt }) => {
  return (
    <a href={href} className={className}>
      <img src={src} alt={alt} width={imageWidth} height={imageHeight} />
    </a>
  );
};

export default ImageButton;