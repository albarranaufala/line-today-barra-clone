export default function BookmarksSkeleton({className}) {
  return (
    <div className={className}>
      <div className="flex mt-4">
        <div className="h-24 w-24 bg-gray-300 animate-pulse" />
        <div className="ml-4 flex-1">
          <div className="w-full h-5 bg-gray-300 animate-pulse" />
          <div className="mt-2 w-3/4 h-5 bg-gray-300 animate-pulse" />
        </div>
      </div>
      <div className="flex mt-4">
        <div className="h-24 w-24 bg-gray-300 animate-pulse" />
        <div className="ml-4 flex-1">
          <div className="w-full h-5 bg-gray-300 animate-pulse" />
          <div className="mt-2 w-3/4 h-5 bg-gray-300 animate-pulse" />
        </div>
      </div>
      <div className="flex mt-4">
        <div className="h-24 w-24 bg-gray-300 animate-pulse" />
        <div className="ml-4 flex-1">
          <div className="w-full h-5 bg-gray-300 animate-pulse" />
          <div className="mt-2 w-3/4 h-5 bg-gray-300 animate-pulse" />
        </div>
      </div>
    </div>
  )
}
