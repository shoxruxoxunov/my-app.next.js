import { InvoiceLilst, Navbar } from "./components";
import DataFetch from "./components/dataFetch";



async function Home() {
  const invoices = await DataFetch("http://localhost:4000/data");
  

  return (
    <main className="">
      <Navbar />
      <InvoiceLilst invoices={invoices}/>
    </main>
  );
}

export default Home;
