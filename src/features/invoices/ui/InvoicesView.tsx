import React from "react";
import type { Invoice } from "../../../shared/fakeAPI/db";

type Props = {
  loading: boolean;
  invoices: Invoice[];
  filter: string;
  onFilterChange: (value: string) => void;
  isDebouncing?: boolean;
};

export function InvoicesView({
  loading,
  invoices,
  filter,
  onFilterChange,
  isDebouncing,
}: Props) {
  return (
    <div>
      <h3>Mis facturas</h3>

      <label>Filtrar por InvoiceId</label>
      <input
        value={filter}
        onChange={(e) => onFilterChange(e.target.value)}
        placeholder="INV-00"
      />
      {isDebouncing ? <div className="small">Buscando...</div> : null}

      <div className="hr" />

      {loading ? (
        <p>Cargando...</p>
      ) : invoices.length === 0 ? (
        <p className="small">Sin resultados.</p>
      ) : (
        invoices.map((x) => (
          <div key={x.id} className="card" style={{ marginTop: 10 }}>
            <div className="mono">{x.id}</div>
            <div className="small">
              {x.provider} • {x.msisdn}
            </div>
            <div style={{ marginTop: 6 }}>
              <span className="badge">Monto: ${x.amount}</span>{" "}
              <span className="badge">Status: {x.status}</span>
            </div>

            <div className="hr" />
          </div>
        ))
      )}
    </div>
  );
}
