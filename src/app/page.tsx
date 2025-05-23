import Link from 'next/link'
import { ShoppingBagIcon, UserIcon, GiftIcon } from '@heroicons/react/24/outline'

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-primary-100/20">
        <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg">
                <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Dobrodošli u Moju Prodavnicu
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Pronađite sve što vam treba na jednom mjestu. Brza dostava, kvalitetni proizvodi i odlične cijene.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <Link
                    href="/proizvodi"
                    className="btn-primary"
                  >
                    Pogledaj proizvode
                  </Link>
                  <Link href="/kako-to" className="text-sm font-semibold leading-6 text-gray-900">
                    Saznaj više <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Brže i bolje</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Sve što vam treba na jednom mjestu
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <ShoppingBagIcon className="h-5 w-5 flex-none text-primary-600" aria-hidden="true" />
                Brza dostava
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">Dostavljamo vaše proizvode brzo i sigurno na vašu adresu.</p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <UserIcon className="h-5 w-5 flex-none text-primary-600" aria-hidden="true" />
                Personalizirano iskustvo
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">Prilagođene preporuke i posebne ponude za naše korisnike.</p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <GiftIcon className="h-5 w-5 flex-none text-primary-600" aria-hidden="true" />
                Nagradne igre
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">Sudjelujte u nagradnim igrama i osvojite vrijedne nagrade.</p>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  )
} 