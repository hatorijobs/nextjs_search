import type { NextPage } from 'next';
import { Search } from './components/Search';

const Home: NextPage = () => {
  return (
    <div className='font-bold'>
      <Search />
    </div>
  );
};

export default Home;
