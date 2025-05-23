'use client'

import { useCartStore } from '@/store/cart'
import { products } from '@/data/products'
import Image from 'next/image'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import toast from 'react-hot-toast'
import { notFound } from 'next/navigation'

interface ProductPageProps {
  params: {
    slug: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.slug === params.slug)
  const addItem = useCartStore((state) => state.addItem)

  if (!product) {
    notFound()
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    })
    toast.success('Proizvod dodan u košaricu')
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          {/* Product image */}
          <div className="lg:max-w-lg lg:self-end">
            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg">
              <Image
                src={product.image}
                alt={product.name}
                width={800}
                height={800}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>

          {/* Product details */}
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">{product.name}</h1>
            <div className="mt-3">
              <h2 className="sr-only">Informacije o proizvodu</h2>
              <p className="text-3xl tracking-tight text-gray-900">{product.price.toFixed(2)} €</p>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Opis</h3>
              <div className="space-y-6 text-base text-gray-700">{product.description}</div>
            </div>

            <div className="mt-8">
              <button
                type="button"
                onClick={handleAddToCart}
                className="btn-primary flex w-full items-center justify-center"
              >
                <ShoppingCartIcon className="mr-2 h-5 w-5" aria-hidden="true" />
                Dodaj u košaricu
              </button>
            </div>

            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-900">Detalji</h3>
              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  <li className="text-gray-400">
                    <span className="text-gray-600">Kategorija: {product.category}</span>
                  </li>
                  <li className="text-gray-400">
                    <span className="text-gray-600">Dostupnost: Na stanju</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 