"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function TradePanel() {
  const [mode, setMode] = useState<"buy" | "sell">("buy");
  const [selection, setSelection] = useState<"yes" | "no">("yes");
  const [amount, setAmount] = useState<number>(0);

  const priceYes = 46;
  const priceNo = 55;

  function addAmount(v: number) {
    setAmount((prev) => prev + v);
  }

  return (
    <div className="bg-[#0F1620] border border-[#1E2731] rounded-2xl p-6 w-full max-w-xl">
      {/* TABS */}
      <div className="flex items-center mb-6 border-b border-[#1E2731] text-lg">
        <button
          onClick={() => setMode("buy")}
          className={`px-6 py-3 ${
            mode === "buy"
              ? "text-white border-b-2 border-white"
              : "text-gray-400"
          }`}
        >
          Buy
        </button>

        <button
          onClick={() => setMode("sell")}
          className={`px-6 py-3 ${
            mode === "sell"
              ? "text-white border-b-2 border-white"
              : "text-gray-400"
          }`}
        >
          Sell
        </button>
      </div>

      {/* YES / NO */}
      <div className="grid grid-cols-2 gap-4">
        <button
          onClick={() => setSelection("yes")}
          className={`p-5 rounded-xl text-left font-semibold text-lg transition ${
            selection === "yes"
              ? "bg-[#3BAB68] hover:bg-[#3BAB68] text-white"
              : "bg-[#141C26] text-gray-400"
          }`}
        >
          Yes {priceYes}¢
        </button>

        <button
          onClick={() => setSelection("no")}
          className={`p-5 rounded-xl text-left font-semibold text-lg transition ${
            selection === "no"
              ? "bg-red-600 hover:bg-red-500 text-white"
              : "bg-[#141C26] text-gray-400"
          }`}
        >
          No {priceNo}¢
        </button>
      </div>

      {/* AMOUNT */}
      <div className="mt-8">
        <p className="text-base text-gray-300 mb-1">Amount</p>
        <p className="text-sm text-gray-500 mb-3">Balance $0.00</p>

        {/* USER INPUT */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full bg-[#141C26] border border-[#243042] rounded-xl text-white text-3xl px-5 py-4 outline-none"
              placeholder="Enter amount"
              min={0}
            />
          </div>

          <div className="text-5xl font-bold text-gray-300">
            ${amount || 0}
          </div>
        </div>

        {/* QUICK ADD BUTTONS */}
        <div className="flex gap-3 mt-5">
          <button
            className="bg-[#1E2731] px-5 py-3 rounded-md text-base text-gray-200"
            onClick={() => addAmount(1)}
          >
            +$1
          </button>

          <button
            className="bg-[#1E2731] px-5 py-3 rounded-md text-base text-gray-200"
            onClick={() => addAmount(20)}
          >
            +$20
          </button>

          <button
            className="bg-[#1E2731] px-5 py-3 rounded-md text-base text-gray-200"
            onClick={() => addAmount(100)}
          >
            +$100
          </button>

          <button
            className="bg-[#1E2731] px-5 py-3 rounded-md text-base text-gray-200"
            onClick={() => setAmount(1000)}
          >
            Max
          </button>
        </div>
      </div>

      {/* CTA */}
      <Button className="w-full mt-8 py-7 text-xl bg-[#4B8BFF] hover:bg-[#3574E6]">
        {mode === "buy"
          ? `Buy ${selection === "yes" ? "Yes" : "No"}`
          : `Sell ${selection === "yes" ? "Yes" : "No"}`}
      </Button>
    </div>
  );
}
