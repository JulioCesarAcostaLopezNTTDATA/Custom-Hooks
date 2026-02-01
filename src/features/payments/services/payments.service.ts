import { fakeApi, type PayMethod } from "../../../shared/fakeAPI/db";

export async function payInvoice(input: { invoiceId: string; method: PayMethod }) {
  return fakeApi.payInvoice(input);
}
