import Link from "next/link";

function Navbar() {
  return (
    <>
      <nav className="container mt-5 flex justify-between items-center mb-[88px] ">
        <div className="flex  flex-col ">
          <Link
            className=" text-[rgb(12,14,22)] font-bold text-3xl leading-9 p-[9px]   "
            href="/"
          >
            Invoices
          </Link>
          <span className=" dark:text-whitetext-[rgb(136,142,176)] text-xs font-normal leading-4">
            There are 7 total invoices
          </span>
        </div>
        <div className="flex items-center gap-[73px]">
          <div>
            <p className=" text-[rgb(12,14,22)] font-bold text-xs leading-4">
              Filter by status
            </p>
          </div>
          <div className="w-[150px] h-[48px] rounded-3xl bg-[rgb(124,93,250)]">
            <div className="relative">
              <div className="absolute left-2 top-2 right-2 bottom-2 rounded-full bg-white w-[32px] h-[32px]"></div>
            </div>
            <div className="relative">
              <div className="absolute left-[18px] top-[10px] font-bold ">
                +
              </div>
            </div>
            <div className="relative">
              <p className="text-[rgb(255,255,255)] font-bold text-xs leading-[15px] text-left absolute  right-[25px] top-[15px]">
                New Invoice
              </p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
