"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function TradePanel() {
  const [mode, setMode] = useState<"Buy" | "Sell">("Buy");
  const [outcome, setOutcome] = useState<"Yes" | "No">("Yes");
  const [amount, setAmount] = useState<number>(0);
  const [tab, setTab] = useState("All");

  const priceYes = 0.63;
  const priceNo = 0.38;
  const price = outcome === "Yes" ? priceYes : priceNo;

  const shares = amount > 0 ? (amount / price).toFixed(2) : "0.00";
  const estPayout = amount > 0 ? (Number(shares) * 1).toFixed(2) : "0.00";

  return (
    <div className="bg-[#141B22] border border-[#1E2731] rounded-xl shadow-md overflow-hidden">

      {/* PANEL BODY */}
      <div className="p-4 space-y-4">

        {/* Buy / Sell Toggle */}
        <div className="grid grid-cols-2 bg-[#0F1620] p-1 rounded-lg">
          {["Buy", "Sell"].map((m) => (
            <button
              key={m}
              onClick={() => setMode(m as any)}
              className={`py-2 rounded-md text-sm font-medium transition-all ${
                mode === m
                  ? "bg-[#1E2731] text-white shadow"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {m}
            </button>
          ))}
        </div>

        {/* Market Dropdown */}
        <button className="w-full flex justify-between items-center bg-[#0B1217] border border-[#1E2731] rounded-lg px-3 py-2 text-sm hover:bg-[#0F1822] transition">
          Market
          <ChevronDown className="w-4 h-4 text-gray-500" />
        </button>

        {/* YES / NO SELECTOR */}
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => setOutcome("Yes")}
            className={`py-4 rounded-xl border transition ${
              outcome === "Yes"
                ? "bg-[#1F2B3A] border-[#3FB950] shadow-lg"
                : "bg-[#0F1620] border-transparent hover:border-[#2B3A48]"
            }`}
          >
            <div
              className={`text-xs ${
                outcome === "Yes" ? "text-[#3FB950]" : "text-gray-400"
              }`}
            >
              Yes
            </div>
            <div className="text-2xl font-semibold text-white">63¢</div>
          </button>

          <button
            onClick={() => setOutcome("No")}
            className={`py-4 rounded-xl border transition ${
              outcome === "No"
                ? "bg-[#1F2B3A] border-[#E15241] shadow-lg"
                : "bg-[#0F1620] border-transparent hover:border-[#2B3A48]"
            }`}
          >
            <div
              className={`text-xs ${
                outcome === "No" ? "text-[#E15241]" : "text-gray-400"
              }`}
            >
              No
            </div>
            <div className="text-2xl font-semibold text-white">38¢</div>
          </button>
        </div>

        {/* AMOUNT */}
        <div>
          <div className="text-gray-400 text-xs mb-1">Amount</div>

          <div className="bg-[#0B1217] border border-[#1E2731] rounded-lg p-3 mb-2">
            <div className="text-3xl font-semibold text-white">
              ${amount || 0}
            </div>
          </div>

          <div className="grid grid-cols-4 gap-2">
            {[1, 20, 100].map((v) => (
              <button
                key={v}
                onClick={() => setAmount(amount + v)}
                className="bg-[#1E2731] hover:bg-[#243140] rounded-md py-1.5 text-xs text-gray-200 transition"
              >
                +${v}
              </button>
            ))}
            <button
              onClick={() => setAmount(500)}
              className="bg-[#1E2731] hover:bg-[#243140] rounded-md py-1.5 text-xs text-gray-200"
            >
              Max
            </button>
          </div>
        </div>

        {/* INFO ROW */}
        <div className="text-sm bg-[#0F1620] border border-[#1E2731] rounded-lg p-3 space-y-1">
          <div className="flex justify-between text-gray-400">
            <span>Est. Shares</span>
            <span className="text-white">{shares}</span>
          </div>

          <div className="flex justify-between text-gray-400">
            <span>Est. Payout</span>
            <span className="text-white">${estPayout}</span>
          </div>
        </div>

        {/* CTA */}
        <Button
          disabled={amount === 0}
          className="w-full bg-[#4C82FB] hover:bg-[#5A8DFC] disabled:opacity-40 disabled:cursor-not-allowed h-10"
        >
          {mode} {outcome}
        </Button>
      </div>

      {/* RELATED MARKETS */}
      <div className="border-t border-[#1E2731] p-4 space-y-3">
        <div className="flex gap-2 flex-wrap">
          {["All", "Politics", "Trump", "Trump Presidency"].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-3 py-1.5 text-xs rounded-md transition ${
                tab === t
                  ? "bg-[#1E2731] text-white"
                  : "text-gray-500 hover:text-white"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="space-y-2">
          {[
            "Tim Walz charged by March 31?",
            "AI charged before 2027?",
            "Jerome Powell charged?",
          ].map((m, i) => (
            <div
              key={i}
              className="flex justify-between text-sm text-gray-400 hover:text-white cursor-pointer transition"
            >
              <span>{m}</span>
              <span className="font-semibold">13%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
