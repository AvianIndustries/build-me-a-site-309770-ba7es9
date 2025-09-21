import Link from 'next/link';

export function DogCard({ breed }) {
  return (
    <div className='m-2 bg-white rounded shadow-lg w-64'>
      <img className='w-full h-48 object-cover rounded-t' src={`https://images.dog.ceo/breeds/${breed}/1.jpg`} alt={`${breed} dog`} />
      <div className='px-6 py-4'>
        <div className='font-bold text-xl mb-2'>{breed}</div>
        <Link href={`/breeds/${breed}`}><a className='text-blue-500'>Learn more</a></Link>
      </div>
    </div>
  );
}