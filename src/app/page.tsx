'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => router.push('/login')}>
        Login
      </button>
      <button onClick={() => router.push('/account')}>
        Account
      </button>
      <button onClick={() => router.push('/onboard')}>
        Onboard
      </button>
    </div>
  );
}
