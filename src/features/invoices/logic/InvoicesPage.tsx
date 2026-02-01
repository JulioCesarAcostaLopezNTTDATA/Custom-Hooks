import React, { useMemo, useState } from "react";
import { InvoicesView } from "../ui/InvoicesView";
import { useInvoices } from "./useInvoices";

export function InvoicesPage() {
  const [filter, setFilter] = useState("");
  const { data, isLoading } = useInvoices();

  const filtered = useMemo(() => {
    const invoices = data ?? [];
    const f = filter.trim();
    if (!f) return invoices;
    return invoices.filter((x) => x.id.includes(f));
  }, [data, filter]);

  return (
    <InvoicesView
      loading={isLoading}
      invoices={filtered}
      filter={filter}
      onFilterChange={setFilter}
    />
  );
}
