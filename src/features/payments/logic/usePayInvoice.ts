import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { PayMethod } from "../../../shared/fakeAPI/db";
import { payInvoice } from "../services/payments.service";
import { INVOICES_QUERY_KEY } from "../../invoices/logic/useInvoices";

export function usePayInvoice() {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: (input: { invoiceId: string; method: PayMethod }) => payInvoice(input),
    onSuccess: async () => {
      // refrescar el listado de facturas
      await qc.invalidateQueries({ queryKey: INVOICES_QUERY_KEY });
    },
  });
}
