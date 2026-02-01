import { useQuery } from "@tanstack/react-query";
import type { Invoice } from "../../../shared/fakeAPI/db";
import { listInvoices } from "../services/invoices.service";

export const INVOICES_QUERY_KEY = ["invoices"] as const;

export function useInvoices() {
  return useQuery<Invoice[]>({
    queryKey: INVOICES_QUERY_KEY,
    queryFn: listInvoices,
    staleTime: 30_000,
  });
}
