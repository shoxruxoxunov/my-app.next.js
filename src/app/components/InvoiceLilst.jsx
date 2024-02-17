import Link from "next/link";
import Button from "./Button";

function InvoiceLilst({ invoices }) {
  return (
    <div className="container">
      {invoices.map((invo) => {
        return (
          <ul key={invo.id} className="">
            <Link className="" href={`/aboutinvoice/${invo.id}`}>
              <div className=" flex justify-between items-center rounded-[8px]   mb-4 bg-slate-50 shadow-slate-100 ">
                <li>
                  <h2 className="text-[rgb(12,14,22)] font-bold text-sm leading-4 w-[100px]">
                    <span className="text-[rgb(126,136,195)]">#</span> {invo.id}
                  </h2>
                </li>
                <li className="">
                  <h2 className="text-[12px] font-normal leading-4 text-[rgb(136,142,176)] w-[106px]">
                    {invo.paymentDue}
                  </h2>
                </li>
                <li>
                  <h2 className="w-[150px] text-[rgb(133,139,178)] font-medium text-base">
                    {invo.clientName}
                  </h2>
                </li>
                <li>
                  <h2 className="text-[rgb(12,14,22)] font-bold text-lg w-[116px]">
                    $ {invo.items[0].total.toLocaleString("en-US")}
                  </h2>
                </li>
                <li>
                  {" "}
                  <Button status={invo.status} />
                </li>
              </div>
            </Link>
          </ul>
        );
      })}
    </div>
  );
}

export default InvoiceLilst;
