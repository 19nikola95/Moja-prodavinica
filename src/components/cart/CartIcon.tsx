'use client'

import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useCartStore } from '@/store/cart'

export default function CartIcon() {
  const items = useCartStore((state) => state.items)
  const itemCount = items.reduce((total, item) => total + item.quantity, 0)

  return (
    <Link
      href="/korpa"
      className="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
    >
      <span className="sr-only">Pogledaj korpu</span>
      <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
      {itemCount > 0 && (
        <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary-600 text-xs font-medium text-white">
          {itemCount}
        </span>
      )}
    </Link>
  )
} 