// src/pages/ProductDetail.tsx
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Minus, Plus } from "lucide-react";
// import process from "process";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
    const {id} = useParams<{id:string}>()

    useEffect(()=>{

    },[])
  return (
    <section className="max-w-screen-lg mx-auto px-6 py-10 grid md:grid-cols-2 gap-12">
        
      {/* Left: Product Image */}
      <div className="flex flex-col items-center">
        <img
          src="/images/banner.jpg"
          alt="Product"
          className="aspect-[4/5] h-[500px] w-full object-cover object-center"
        />
        <div className="mt-4 flex gap-4 justify-items-start w-full flex-wrap ">
            <img src="/images/banner.jpg" className="aspect-[4/4] md:w-20 sm:w-28 w-6 "/>
            <img src="/images/banner.jpg" className="aspect-[4/4] md:w-20 sm:w-28 w-6 "/>
            <img src="/images/banner.jpg" className="aspect-[4/4] md:w-20 sm:w-28 w-6 "/>
            <img src="/images/banner.jpg" className="aspect-[4/4] md:w-20 sm:w-28 w-6 "/>
            <img src="/images/banner.jpg" className="aspect-[4/4] md:w-20 sm:w-28 w-6 "/>
            <img src="/images/banner.jpg" className="aspect-[4/4] md:w-20 sm:w-28 w-6 "/>
        </div>
      </div>

      {/* Right: Product Info */}
      <div>
        {/* Status */}
        <span className="inline-block bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded mb-3">
          Sold Out
        </span>

        {/* Title & Price */}
        <h1 className="text-2xl font-semibold mb-2">
          TI SYATS CALLE LOGO PINK
        </h1>
        <p className="text-xl font-bold text-gray-800 mb-6">Rp 349,000</p>

        {/* Quantity Info */}
        <div className="border rounded-md p-3 mb-6">
          <p className="text-sm font-semibold">Quantity Information</p>
          <p className="text-xs text-gray-500">Maximum Quantity: 1</p>
        </div>

        {/* Size Selector */}
        <div className="mb-6">
          <p className="text-sm font-semibold mb-2">Size</p>
          <div className="flex gap-2">
            {["S", "M", "L", "XL"].map((size) => (
              <button
                key={size}
                disabled
                className="w-12 h-10 border rounded text-gray-400 cursor-not-allowed"
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity Selector */}
        <div className="flex items-center gap-3 mb-6">
          <button className="p-2 border rounded">
            <Minus size={18} />
          </button>
          <span className="px-4 py-2 border rounded">1</span>
          <button className="p-2 border rounded">
            <Plus size={18} />
          </button>
        </div>

        {/* Notify Button */}
        <button className="w-full bg-gray-300 text-gray-700 py-3 rounded flex items-center justify-center gap-2 mb-8">
          🔔 Notify Me
        </button>

        {/* Product Details */}
        <div className="mb-8">
          <h2 className="font-semibold mb-2">PRODUCT DETAILS:</h2>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>COTTON COMBED 16S BCI SUPERSOFT</li>
            <li>PLASTISOL INK</li>
            <li>BEST TI SYATS IN THE GAME</li>
          </ul>
        </div>

        {/* Delivery Info */}
        <div className="border rounded-md p-4">
          <h3 className="font-semibold mb-2">Delivery</h3>
          <p className="text-sm">
            <span className="font-medium">Weight:</span> 900g
          </p>
          <p className="text-sm text-gray-500">
            Shipped within 48 hours (upon confirmation of payment)
            <p>{id}</p>
          </p>
          <select>
            
          </select>
        </div>
      </div>
    </section>
  );
}
