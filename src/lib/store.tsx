import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

import { getProduct } from "@/content/products";
import { addLine, cartSubtotal, type CartLine, type Currency } from "@/lib/pricing";

type StoreState = {
  currency: Currency;
  setCurrency: (c: Currency) => void;
  lines: CartLine[];
  count: number;
  subtotal: number;
  add: (line: CartLine) => void;
  setQty: (slug: string, size: string, qty: number) => void;
  remove: (slug: string, size: string) => void;
  clear: () => void;
  bagOpen: boolean;
  setBagOpen: (open: boolean) => void;
};

const StoreContext = createContext<StoreState | null>(null);
const BAG_KEY = "deda-bag-v1";
const CURRENCY_KEY = "deda-currency";

export function StoreProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [currency, setCurrencyState] = useState<Currency>("EUR");
  const [bagOpen, setBagOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(BAG_KEY);
      if (saved) setLines(JSON.parse(saved));
      const c = localStorage.getItem(CURRENCY_KEY);
      if (c === "EUR" || c === "USD") setCurrencyState(c);
    } catch {
      /* ignore corrupt storage */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) localStorage.setItem(BAG_KEY, JSON.stringify(lines));
  }, [lines, hydrated]);

  const setCurrency = useCallback((c: Currency) => {
    setCurrencyState(c);
    localStorage.setItem(CURRENCY_KEY, c);
  }, []);

  const value = useMemo<StoreState>(
    () => ({
      currency,
      setCurrency,
      lines,
      count: lines.reduce((n, l) => n + l.qty, 0),
      subtotal: cartSubtotal(lines, currency, getProduct),
      add: (line) => {
        setLines((prev) => addLine(prev, line));
        setBagOpen(true);
      },
      setQty: (slug, size, qty) =>
        setLines((prev) =>
          prev
            .map((l) => (l.slug === slug && l.size === size ? { ...l, qty } : l))
            .filter((l) => l.qty > 0),
        ),
      remove: (slug, size) =>
        setLines((prev) => prev.filter((l) => !(l.slug === slug && l.size === size))),
      clear: () => setLines([]),
      bagOpen,
      setBagOpen,
    }),
    [currency, setCurrency, lines, bagOpen],
  );

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used inside <StoreProvider>");
  return ctx;
}
