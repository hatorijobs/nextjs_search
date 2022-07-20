import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface ImageProps {
  src: StaticImageData | any;
  width: number;
  height: number;
  alt: string;
}

interface button {
  text: string;
  url: string;
}

export interface CardProps {
  image?: ImageProps;
  title: string;
  text: string;
  button?: button;
}

export const Card: React.FC<CardProps> = ({ image, title, text, button }:CardProps) => {
  return (
    <div className='w-[300px] text-center rounded-lg shadow-lg'>
      <Image
        src={image?.src}
        height={image?.height}
        width={image?.width}
        alt={image?.alt}
        className='rounded-t-lg'
      />

      <h2 className='my-2 text-xl font-bold'>{title}</h2>
      <p className='px-4 text-sm text-left'>{text}</p>    
      
      <button className='py-1.5 px-4 my-4 text-sm bg-yellow-500 rounded-full shadow-md'>
        {button?.text}
      </button>
    </div>
  );
};
export default Card;
