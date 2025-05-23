export default function Loading() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="h-8 w-48 animate-pulse rounded bg-gray-200" />

          <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
            <div className="lg:col-span-7">
              <div className="border-t border-gray-200 pt-10">
                <div className="space-y-6">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center gap-x-6">
                      <div className="h-24 w-24 animate-pulse rounded bg-gray-200" />
                      <div className="flex flex-1 flex-col">
                        <div className="h-6 w-48 animate-pulse rounded bg-gray-200" />
                        <div className="mt-2 h-4 w-32 animate-pulse rounded bg-gray-200" />
                        <div className="mt-4 flex items-center gap-x-4">
                          <div className="h-8 w-24 animate-pulse rounded bg-gray-200" />
                          <div className="h-8 w-8 animate-pulse rounded bg-gray-200" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
              <div className="h-6 w-32 animate-pulse rounded bg-gray-200" />
              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="h-4 w-24 animate-pulse rounded bg-gray-200" />
                  <div className="h-4 w-32 animate-pulse rounded bg-gray-200" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="h-4 w-24 animate-pulse rounded bg-gray-200" />
                  <div className="h-4 w-32 animate-pulse rounded bg-gray-200" />
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                  <div className="h-6 w-24 animate-pulse rounded bg-gray-200" />
                  <div className="h-6 w-32 animate-pulse rounded bg-gray-200" />
                </div>
              </div>
              <div className="mt-6">
                <div className="h-12 w-full animate-pulse rounded bg-gray-200" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 