export interface Market {
  ticker: string;
  eventTicker: string;
  marketType: "binary" | string;
  title: string;
  subtitle: string;
  yesSubTitle: string;
  noSubTitle: string;
  openTime: number; // unix seconds
  closeTime: number; // unix seconds
  expirationTime: number; // unix seconds
  status: "active" | "finalized" | string;
  volume: number;
  result: "yes" | "no" | ""; // empty string when unresolved
  openInterest: number;
  canCloseEarly: boolean;
  earlyCloseCondition: string;
  rulesPrimary: string;
  rulesSecondary: string;

  yesBid: string | null;
  yesAsk: string | null;
  noBid: string | null;
  noAsk: string | null;

  accounts: Record<string, MarketAccount>;
}

export interface MarketAccount {
  marketLedger: string;
  yesMint: string;
  noMint: string;
  isInitialized: boolean;
  redemptionStatus: "pending" | "open" | null;
  scalarOutcomePct?: number; // only present on some finalized markets
}
