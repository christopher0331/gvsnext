import Image from 'next/image';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Welcome to Our Website</h1>
      <p>This is the home page.</p>
      {/* You can use the Image component here as needed */}
    </div>
  );
}

