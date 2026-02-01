import React from "react";
import type { PayMethod } from "../../../shared/fakeAPI/db";

type Props = {
  invoiceId: string;
  method: PayMethod;
  loading: boolean;
  message: string;
  onInvoiceIdChange: (value: string) => void;
  onMethodChange: (value: PayMethod) => void;
  onPay: () => void;
};

export function PayInvoiceView({
  invoiceId,
  method,
  loading,
  message,
  onInvoiceIdChange,
  onMethodChange,
  onPay,
}: Props) {
  return (
    <div>
      <h3>Pagar factura</h3>

      <label>InvoiceId</label>
      <input value={invoiceId} onChange={(e) => onInvoiceIdChange(e.target.value)} />

      <label>Método</label>
      <select value={method} onChange={(e) => onMethodChange(e.target.value as PayMethod)}>
        <option value="CARD">Tarjeta</option>
        <option value="TRANSFER">Transferencia</option>
        <option value="WALLET">Wallet</option>
      </select>

      <div style={{ marginTop: 12 }}>
        <button disabled={loading} onClick={onPay}>
          {loading ? "Pagando..." : "Pagar"}
        </button>
      </div>

      <div style={{ marginTop: 10, minHeight: 24 }}>
        <span className={message.includes("OK") ? "ok" : message ? "err" : ""}>{message}</span>
      </div>

      <div className="hr" />
      <div className="small">
        Prueba: <span className="mono">INV-002 + TRANSFER</span> falla.
        <br />
        Prueba: <span className="mono">INV-003</span> falla por monto 0.
      </div>
    </div>
  );
}
