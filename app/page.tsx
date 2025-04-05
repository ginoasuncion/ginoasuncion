'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-200 via-purple-100 to-pink-200 text-center px-4 transition-opacity duration-1000 ease-in-out"
      style={{ opacity: mounted ? 1 : 0 }}
    >
      <div className="bg-white bg-opacity-80 p-8 rounded-2xl shadow-xl max-w-lg w-full">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">🚧 Work In Progress</h1>
        <p className="text-lg text-gray-600">
          ginoasuncion.com is currently under construction.
          <br />
          Check back soon to see something awesome 👀
        </p>
      </div>
    </main>
  );
}
