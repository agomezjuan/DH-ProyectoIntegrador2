import React from 'react';
import { Navbar } from '@/components/Navbar';

export default function Layout({ children }) {
  return (
    <div className='min-h-screen flex flex-col bg-base-300'>
      {/* Contenido Principal */}
      <div className='flex-grow bg-base-300'>
        <main className='max-w-7xl mx-auto px-4 py-8'>
          <Navbar />
          {children}
        </main>
      </div>

      {/* Pie de Página */}
    </div>
  );
}
