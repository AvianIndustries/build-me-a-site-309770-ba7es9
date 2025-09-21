import { GetServerSideProps } from 'next';
import Link from 'next/link';
import Header from '../components/Header';
import DogCard from '../components/DogCard';

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('https://dog.ceo/api/breeds/list/all');
  const data = await res.json();
  const breeds = Object.keys(data.message);
  return { props: { breeds } };
}

export default function HomePage({ breeds }) {
  return (
    <div className='h-screen bg-gray-100'>
      <Header />
      <div className='flex flex-wrap justify-center p-4'>
        {breeds.map((breed, index) => <DogCard key={index} breed={breed} />)}
      </div>
      <div className='text-center my-4'>
        <Link href='/about'>About Us</Link>
      </div>
    </div>
  );
}