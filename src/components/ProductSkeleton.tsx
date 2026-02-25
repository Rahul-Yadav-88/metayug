export function ProductSkeleton() {
  return (
    <div className="rounded-2xl border border-yellow-600/30 bg-neutral-900/80 overflow-hidden animate-pulse">
      <div className="h-64 bg-neutral-800" />
      <div className="p-5 space-y-3">
        <div className="h-4 w-2/3 bg-neutral-700 rounded" />
        <div className="h-3 w-1/3 bg-neutral-700 rounded" />
        <div className="h-3 w-full bg-neutral-800 rounded" />
        <div className="h-3 w-5/6 bg-neutral-800 rounded" />
      </div>
    </div>
  )
}
