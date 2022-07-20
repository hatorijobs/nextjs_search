import { useState, useEffect } from 'react';
import { Card, CardProps } from './Card';
import ProImage from '../profile.png';

const data: CardProps[] = [
  {
    image: {
      src: ProImage,
      width: 300,
      height: 210,
      alt: 'profile',
    },
    title: 'JavaScript',
    text: 'あああああああああああああああああ',
    button: {
      text: 'Read',
      url: 'https://google.com',
    },
  },
  {
    image: {
      src: ProImage,
      width: 300,
      height: 210,
      alt: 'profile',
    },
    title: 'React',
    text: 'いいいいいいいいいいいいいいいい',
    button: {
      text: 'Read',
      url: 'https://google.com',
    },
  },
  {
    image: {
      src: ProImage,
      width: 300,
      height: 210,
      alt: 'profile',
    },
    title: 'TypeScript',
    text: 'ううううううううううううううううう',
    button: {
      text: 'Read',
      url: 'https://google.com',
    },
  },
];

export const Search: React.FC = () => {
  const [showItems, setShowItems] = useState<CardProps[]>([]);

  useEffect(() => {
    setShowItems(data);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const result = data.filter((item) => {
      return item.title.toLowerCase().match(e.target.value.toLowerCase());
    });
    console.log(result);
    setShowItems(result);
  };

  return (
    <div>
      <form action='' className='flex justify-center'>
        <input
          type='text'
          className='my-8 rounded border border-black'
          placeholder='search'
          onChange={(e) => handleChange(e)}
        />
      </form>
      <div className='flex justify-between'>
        {showItems.map((item, index) => {
          return (
            <>
              <Card key={index} image={item.image} title={item.title} text={item.text} button={item.button} />
            </>
          );
        })}
      </div>
    </div>
  );
};
export default Search;
