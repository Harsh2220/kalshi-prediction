import { Market } from "./market";

export interface Event {
  ticker: string;
  seriesTicker: string;
  strikeDate: string | null;
  strikePeriod: string | null;
  title: string;
  subtitle: string;
  imageUrl: string;
  competition: string;
  competitionScope: "Future" | "Live" | string;
  settlementSources: SettlementSource[];
  volume: number;
  volume24h: number;
  liquidity: number;
  openInterest: number;
  markets: Market[];
}

export interface SettlementSource {
  name: string;
  url: string;
}
