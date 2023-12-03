import React from "react";
import Image from "next/image";

interface ImageWrapperProps {
  src: any;
  alt: string;
  imageSize: string;
  sizes?: string;
  className?: string;
}

function ImageWrapper({
  src,
  alt,
  imageSize,
  sizes = "",
  className = "",
}: ImageWrapperProps) {
  return (
    <div className={`${imageSize} relative`}>
      <Image
        className={`${className}`}
        src={src}
        alt={alt}
        sizes={sizes}
        fill
      />
    </div>
  );
}

export default ImageWrapper;
