import React from "react";
import { InvoicesView } from "../ui/InvoicesView";
import { useInvoices } from "./useInvoices";
import { useInvoiceSearch } from "./useInvoiceSearch";

export function InvoicesPage() {
  const { data, isLoading } = useInvoices();
  const invoices = data ?? [];

  const { filter, setFilter, filtered, isDebouncing } = useInvoiceSearch(invoices);

  return (
    <InvoicesView
      loading={isLoading}
      invoices={filtered}
      filter={filter}
      onFilterChange={setFilter}
      isDebouncing={isDebouncing}
    />
  );
}
