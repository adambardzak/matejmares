"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

type ProductProps = {
  id: number;
  name: string;
  price: number;
  dimensions?: string;
  image: string;
  slug: string;
};

export default function ProductCard({
  id,
  name,
  price,
  dimensions,
  image,
  slug,
}: ProductProps) {
  const handleAddToCart = () => {
    alert(`Produkt ${name} přidán do košíku`);
  };

  return (
    <div className="overflow-hidden">
      <div className="relative h-64 w-full bg-gray-100">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
          priority={id < 4} // prioritně načítat první produkty
        />
      </div>

      <div className="py-4">
        <h2 className="text-xl font-semibold mb-2">{name}</h2>
        <p className="text-gray-700 font-bold mb-2">{price} Kč</p>

        {dimensions && (
          <p className="text-sm text-gray-500 mb-3">Rozměry: {dimensions}</p>
        )}

        <div className="flex justify-between mt-4">
          <Link
            href={`/produkty/${slug}`}
            className="text-black hover:underline"
          >
            Detail produktu
          </Link>

          <button
            className="bg-black text-white px-3 py-1 rounded hover:bg-black/80 transition-colors"
            onClick={handleAddToCart}
          >
            Do košíku
          </button>
        </div>
      </div>
    </div>
  );
}
