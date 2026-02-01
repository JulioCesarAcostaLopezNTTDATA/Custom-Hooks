import React, { useState } from "react";
import type { PayMethod } from "../../../shared/fakeAPI/db";
import { PayInvoiceView } from "../ui/PayInvoiceView";
import { usePayInvoice } from "./usePayInvoice";

export function PayInvoicePage() {
  const [invoiceId, setInvoiceId] = useState("INV-001");
  const [method, setMethod] = useState<PayMethod>("CARD");
  const [message, setMessage] = useState("");

  const payMutation = usePayInvoice();

  async function onPay() {
    setMessage("");

    if (!invoiceId.trim()) {
      setMessage("InvoiceId requerido");
      return;
    }

    try {
      const r = await payMutation.mutateAsync({ invoiceId, method });
      setMessage(`Pago OK: ${r.paymentId}`);
    } catch (e: any) {
      setMessage(`Pago fallido: ${e?.message ?? "Error inesperado"}`);
    }
  }

  return (
    <PayInvoiceView
      invoiceId={invoiceId}
      method={method}
      loading={payMutation.isPending}
      message={message}
      onInvoiceIdChange={setInvoiceId}
      onMethodChange={setMethod}
      onPay={onPay}
    />
  );
}
