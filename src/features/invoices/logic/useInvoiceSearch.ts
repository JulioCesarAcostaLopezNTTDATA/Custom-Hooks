import { useMemo, useState } from "react";
import type { Invoice } from "../../../shared/fakeAPI/db";
import { useDebouncedValue } from "../../../shared/hooks/useDebouncedValue";

/**
 * Encapsula el estado del filtro y el filtrado de facturas.
 * Se usa debounce para evitar recalcular en cada keystroke (útil en listas grandes).
 */
export function useInvoiceSearch(invoices: Invoice[]) {
  const [filter, setFilter] = useState("");
  const debouncedFilter = useDebouncedValue(filter, 250);

  const filtered = useMemo(() => {
    const f = debouncedFilter.trim();
    if (!f) return invoices;
    return invoices.filter((x) => x.id.includes(f));
  }, [invoices, debouncedFilter]);

  const isDebouncing = filter !== debouncedFilter;

  return { filter, setFilter, filtered, isDebouncing };
}
