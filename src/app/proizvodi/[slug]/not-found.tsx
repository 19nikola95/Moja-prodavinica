import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center py-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">Proizvod nije pronađen</h1>
          <p className="mt-2 text-gray-500">Nažalost, traženi proizvod ne postoji.</p>
          <Link href="/proizvodi" className="btn-primary mt-6">
            Povratak na proizvode
          </Link>
        </div>
      </div>
    </div>
  )
} 