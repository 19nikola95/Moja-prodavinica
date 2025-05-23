'use client'

import { Suspense, useState } from 'react'
import ProductCard from '@/components/products/ProductCard'
import { FunnelIcon } from '@heroicons/react/24/outline'
import { products } from '@/data/products'

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const categories = Array.from(new Set(products.map((product) => product.category)))

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">Proizvodi</h1>
          <div className="flex items-center">
            <button
              type="button"
              className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              <FunnelIcon className="mr-2 h-5 w-5 text-gray-400" aria-hidden="true" />
              Filtriraj
            </button>
          </div>
        </div>

        <div className="pt-6 pb-24">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
            {/* Filters */}
            <div className="hidden lg:block">
              <h2 className="text-lg font-medium text-gray-900">Kategorije</h2>
              <div className="mt-4 space-y-4">
                {categories.map((category) => (
                  <div key={category} className="flex items-center">
                    <input
                      id={category}
                      name="category"
                      type="checkbox"
                      checked={selectedCategory === category}
                      onChange={() => setSelectedCategory(selectedCategory === category ? null : category)}
                      className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                    />
                    <label htmlFor={category} className="ml-3 text-sm text-gray-600">
                      {category}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Product grid */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                <Suspense fallback={<div>Učitavanje proizvoda...</div>}>
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} {...product} />
                  ))}
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 