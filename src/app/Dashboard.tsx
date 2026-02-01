import React from "react";
import type { Page } from "./App";
import { PayInvoicePage } from "../features/payments/logic/PayInvoicePage";
import { InvoicesPage } from "../features/invoices/logic/InvoicesPage";

export function Dashboard({ page }: { page: Page }) {
  return (
    <div className="row">
      <div className="card">
        {page === "PAY" ? <PayInvoicePage /> : <InvoicesPage />}
      </div>
    </div>
  );
}
