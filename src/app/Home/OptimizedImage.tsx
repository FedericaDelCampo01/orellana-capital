import Image, { ImageProps } from 'next/image';

interface OptimizedImageProps extends ImageProps {
  src: string;
  alt: string;
}

const OptimizedImage = ({ src, alt, ...props }: OptimizedImageProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      loading="lazy"
      quality={50}
      {...props}
    />
  );
};

export default OptimizedImage;