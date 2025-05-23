export default function Loading() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
          <div className="h-8 w-48 animate-pulse rounded bg-gray-200" />
          <div className="h-8 w-24 animate-pulse rounded bg-gray-200" />
        </div>

        <div className="pt-6 pb-24">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
            {/* Filters */}
            <div className="hidden lg:block">
              <div className="h-6 w-24 animate-pulse rounded bg-gray-200" />
              <div className="mt-4 space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center">
                    <div className="h-4 w-4 animate-pulse rounded bg-gray-200" />
                    <div className="ml-3 h-4 w-24 animate-pulse rounded bg-gray-200" />
                  </div>
                ))}
              </div>
            </div>

            {/* Product grid */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="group relative">
                    <div className="aspect-h-1 aspect-w-1 w-full animate-pulse overflow-hidden rounded-lg bg-gray-200" />
                    <div className="mt-4 flex justify-between">
                      <div>
                        <div className="h-4 w-32 animate-pulse rounded bg-gray-200" />
                        <div className="mt-1 h-4 w-24 animate-pulse rounded bg-gray-200" />
                      </div>
                      <div className="flex flex-col items-end">
                        <div className="h-4 w-16 animate-pulse rounded bg-gray-200" />
                        <div className="mt-2 h-8 w-8 animate-pulse rounded-full bg-gray-200" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 