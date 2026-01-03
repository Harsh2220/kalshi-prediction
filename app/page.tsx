"use client";

import { MarketCard } from "@/components/landing-page/card";
import { trpc } from "@/lib/trpc";

export function Page() {
  const { data } = trpc.events.all.useQuery();

  return (
    <div className="min-h-screen bg-[#1a1b1e] text-white">
      <div className="p-3 sm:p-4">
        <div
          className="
          grid 
          grid-cols-1
          md:grid-cols-2 
          lg:grid-cols-3 
          xl:grid-cols-4
          gap-3 sm:gap-4
        "
        >
          {data?.map((event) => (
            <MarketCard key={event.ticker} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page;
