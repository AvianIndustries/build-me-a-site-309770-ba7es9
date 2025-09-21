import Header from '../../components/Header';

export default function AboutPage() {
  return (
    <div className='h-screen bg-gray-100'>
      <Header />
      <div className='mx-auto max-w-prose p-4'>
        <h2 className='text-2xl font-bold mb-4'>About Doggo World</h2>
        <p className='mb-4'>Doggo World is a website dedicated to all breeds of dogs. We provide information about various breeds and strive to be the go-to source for all dog lovers!</p>
      </div>
    </div>
  );
}