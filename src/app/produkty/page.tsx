import React from "react";
import ProductCard from "@/components/ProductCard";

// Typy pro mock data produktů
type Product = {
  id: number;
  name: string;
  price: number;
  dimensions?: string;
  image: string;
  slug: string;
  description: string;
};

// Mock data produktů z keramiky
const mockProducts: Product[] = [
  {
    id: 1,
    name: "Keramický hrnek bílý",
    price: 450,
    dimensions: "10 × 8 × 12 cm",
    image: "/mock/hrnek1.webp", // Později nahradit skutečnými cestami k obrázkům
    slug: "keramicky-hrnek-bily",
    description: "Ručně vyráběný keramický hrnek z bílé kameniny s glazurou."
  },
  {
    id: 2,
    name: "Keramická mísa",
    price: 850,
    dimensions: "25 × 25 × 10 cm",
    image: "/mock/hrnek2.jpg",
    slug: "keramicka-misa",
    description: "Prostorná keramická mísa vhodná na salát nebo jako dekorativní prvek."
  },
  {
    id: 3,
    name: "Set keramických talířů",
    price: 1200,
    dimensions: "20 × 20 × 2 cm (6 ks)",
    image: "/mock/hrnek3.jpeg",
    slug: "set-keramickych-taliru",
    description: "Set šesti ručně vyráběných keramických talířů v přírodních odstínech."
  },
  {
    id: 4,
    name: "Keramický květináč",
    price: 580,
    dimensions: "15 × 15 × 18 cm",
    image: "/mock/hrnek1.webp",
    slug: "keramicky-kvetinac",
    description: "Glazovaný keramický květináč vhodný pro pokojové rostliny."
  },
  {
    id: 5,
    name: "Keramická váza",
    price: 790,
    dimensions: "12 × 12 × 25 cm",
    image: "/mock/hrnek2.jpg",
    slug: "keramicka-vaza",
    description: "Elegantní keramická váza s jedinečnou texturou."
  },
  {
    id: 6,
    name: "Keramická konvice",
    price: 990,
    dimensions: "20 × 15 × 18 cm",
    image: "/mock/hrnek3.jpeg",
    slug: "keramicka-konvice",
    description: "Stylová keramická konvice na čaj s praktickým uchem."
  }
];

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8 pt-24">
      <h1 className="text-3xl font-bold mb-8 text-center">Keramické produkty</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {mockProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            dimensions={product.dimensions}
            image={product.image}
            slug={product.slug}
          />
        ))}
      </div>
    </div>
  );
}
