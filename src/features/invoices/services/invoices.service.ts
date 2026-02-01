import { fakeApi, type Invoice } from "../../../shared/fakeAPI/db";

export async function listInvoices(): Promise<Invoice[]> {
  return fakeApi.listInvoices();
}
