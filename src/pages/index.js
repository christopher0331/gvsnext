import Image from 'next/image';
import Navbar from '../components/Navbar';
import { useState } from 'react';

export default function Home() {

  return (
    <div>
      <Navbar />
      <main>
        <p>This is the home page.</p>
        {/* You can use the Image component here as needed */}
      </main>
    </div>
  );
}

