import { router } from "../trpc";
import { eventsRouter } from "./events";
import { marketsRouter } from "./markets";

export const appRouter = router({
  markets: marketsRouter,
  events: eventsRouter,
});

export type AppRouter = typeof appRouter;
