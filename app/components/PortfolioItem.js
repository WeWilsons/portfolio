// components/PortfolioItem.js

'use client'; // Required for client-side interactivity

import { useState } from 'react';
import Image from 'next/image';

export default function PortfolioItem({ item }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className="card card-compact bg-base-100 shadow-xl cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <figure>
          <Image
            src={item.image}
            alt={item.title}
            width={600}
            height={400}
            className="object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{item.title}</h2>
          <p>{item.description}</p>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal modal-open">
          <div className="modal-box relative">
            <button
              className="btn btn-sm btn-circle absolute right-2 top-2"
              onClick={() => setIsModalOpen(false)}
            >
              ✕
            </button>
            <h3 className="text-lg font-bold">{item.title}</h3>
            <Image
              src={item.image}
              alt={item.title}
              width={800}
              height={600}
              className="object-cover my-4"
            />
            <p>{item.description}</p>
          </div>
        </div>
      )}
    </>
  );
}
