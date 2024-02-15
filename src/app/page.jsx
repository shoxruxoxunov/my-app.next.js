import SingleInvoice from "./aboutinvoice/[id]/page";
import { Navbar } from "./components";
import InvoiceLilst from "./components/InvoiceLilst";
import Restangle from "./components/Restangle";

async function getData(url) {
  const req = await fetch(url);
  const data = await req.json();
  return data;
}

async function Home() {
  const invoices = await getData("http://localhost:4000/data");
  console.log(invoices);
  return (
    <main className="flex-1">
      <InvoiceLilst invoices={invoices} />
      <Restangle />
    </main>
  );
}

export default Home;
