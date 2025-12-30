import { Bookmark, Gift } from "lucide-react"
import Link from "next/link";

interface MarketCardProps {
  id: string
  title: string
  image?: string
  mainProbability: number
  volume: string
}

export function MarketCard({ id, title, image, mainProbability, volume }: MarketCardProps) {
  const radius = 34
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (mainProbability / 100) * circumference

  return (
    <div className="bg-[#2a2c33] rounded-2xl border border-slate-800 hover:border-slate-700 transition-colors overflow-hidden cursor-pointer w-full max-w-xl">

      {/* HEADER — ONLY THIS PART LINKS */}
      <Link href={`/market/${id}`}>
        <div className="p-4 border-b border-slate-800">
          <div className="flex gap-3">

            {/* Image */}
            <div className="w-16 h-16 rounded-xl overflow-hidden bg-slate-700 shrink-0">
              {image && (
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            {/* Title */}
            <div className="flex-1 min-w-0">
              <h3 className="text-base font-semibold text-white leading-snug line-clamp-2">
                {title}
              </h3>
              <span className="text-xs text-slate-400 block mt-1">
                {volume} Volume
              </span>
            </div>

            {/* Gauge */}
            <div className="flex flex-col items-center scale-90">
              <div className="relative w-16 h-16">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 80 80">
                  <circle
                    cx="40"
                    cy="40"
                    r={radius}
                    strokeWidth="6"
                    className="stroke-slate-700"
                    fill="none"
                  />
                  <circle
                    cx="40"
                    cy="40"
                    r={radius}
                    strokeWidth="6"
                    strokeLinecap="round"
                    className="stroke-emerald-500 transition-all duration-300"
                    fill="none"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-lg font-bold text-white">
                  {mainProbability}%
                </span>
              </div>
              <span className="text-xs text-slate-400 mt-1">chance</span>
            </div>
          </div>
        </div>
      </Link>

      {/* YES / NO */}
      <div className="px-4 py-3 flex gap-3">
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log("YES clicked");
          }}
          className="flex-1 py-4 bg-green-500/15 hover:bg-green-500/20 text-green-400 border-green-700/50 text-md font-semibold transition"
        >
          Yes
        </button>

        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log("NO clicked");
          }}
          className="flex-1 py-4 bg-red-500/15 hover:bg-red-500/20 text-red-400 border-red-700/50 text-md font-semibold transition"
        >
          No
        </button>
      </div>

      {/* FOOTER */}
      <div className="px-4 py-3 border-t border-slate-800 bg-[#2a2c33] flex items-center justify-between">
        <span className="text-xs text-slate-400">{id}</span>

        <div className="flex gap-1">
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              console.log("Gift clicked");
            }}
            className="p-2 hover:bg-slate-800 rounded-lg transition text-slate-400 hover:text-white"
          >
            <Gift className="w-4 h-4" />
          </button>

          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              console.log("Bookmark clicked");
            }}
            className="p-2 hover:bg-slate-800 rounded-lg transition text-slate-400 hover:text-white"
          >
            <Bookmark className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
