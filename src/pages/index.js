import Image from 'next/image';
import Header from '../components/Header.js';
import Homepage from '../components/Homepage.js';
import { useState } from 'react';

export default function Home() {

  return (
    <div>
      <Header />
      <Homepage />
    </div>
  );
}

