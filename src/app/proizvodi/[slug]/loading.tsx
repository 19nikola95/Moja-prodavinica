export default function Loading() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          {/* Product image */}
          <div className="lg:max-w-lg lg:self-end">
            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg">
              <div className="h-full w-full animate-pulse bg-gray-200" />
            </div>
          </div>

          {/* Product details */}
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <div className="h-8 w-64 animate-pulse rounded bg-gray-200" />
            <div className="mt-3">
              <div className="h-8 w-32 animate-pulse rounded bg-gray-200" />
            </div>

            <div className="mt-6">
              <div className="space-y-4">
                <div className="h-4 w-full animate-pulse rounded bg-gray-200" />
                <div className="h-4 w-3/4 animate-pulse rounded bg-gray-200" />
                <div className="h-4 w-1/2 animate-pulse rounded bg-gray-200" />
              </div>
            </div>

            <div className="mt-8">
              <div className="h-12 w-full animate-pulse rounded bg-gray-200" />
            </div>

            <div className="mt-6">
              <div className="h-6 w-24 animate-pulse rounded bg-gray-200" />
              <div className="mt-4 space-y-2">
                <div className="h-4 w-32 animate-pulse rounded bg-gray-200" />
                <div className="h-4 w-40 animate-pulse rounded bg-gray-200" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 