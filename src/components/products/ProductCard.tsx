'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import { useCartStore } from '@/store/cart'
import toast from 'react-hot-toast'

interface ProductCardProps {
  id: string
  name: string
  price: number
  image: string
  category: string
  slug: string
}

export default function ProductCard({ id, name, price, image, category, slug }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem)

  const handleAddToCart = () => {
    addItem({ id, name, price, image })
    toast.success('Proizvod dodan u košaricu')
  }

  return (
    <div className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200">
        <Image
          src={image}
          alt={name}
          width={500}
          height={500}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <Link href={`/proizvodi/${slug}`}>
              <span aria-hidden="true" className="absolute inset-0" />
              {name}
            </Link>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{category}</p>
        </div>
        <div className="flex flex-col items-end">
          <p className="text-sm font-medium text-gray-900">{price.toFixed(2)} €</p>
          <button
            type="button"
            onClick={handleAddToCart}
            className="mt-2 rounded-full bg-primary-600 p-2 text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            <ShoppingCartIcon className="h-5 w-5" aria-hidden="true" />
            <span className="sr-only">Dodaj u košaricu</span>
          </button>
        </div>
      </div>
    </div>
  )
} 