import Link from "next/link";
function SingleInvoice({ params }) {
  return (
    <div className="container mt-[81px]">
      <div className="mb-[70px]">
        <Link
          className="  w-[53px] text-[rgb(12,14,22)] font-bold text-[12px] "
          href="/"
        >
          Go back
        </Link>
      </div>
      <nav className="">
        <div className="flex justify-between items-center">
          <div className="flex gap-[32px] items-center">
            <div className="w-[39px] text-[rgb(133,139,178)] tex-[12px] font-normal  ">
              Status
            </div>
            <div className="w-[103px] h-[40px] rounded-[6px] bg-[rgb(255,143,0)] opacity-[0.4] text-center ">
              <button className="text-[12px]  pt-3 font-bold text-[rgb(62,58,17)] ">
                Pending
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center gap-5">
            <div className=" text-center w-[73px] h-[48px] rounded-[24px] bg-[rgb(240,250,253)]">
              <button className="pt-4 text-[12px] font-bold text-[rgb(126,136,195)]">
                Edit
              </button>
            </div>
            <div className=" text-center w-[89px] h-[48px] rounded-[24px] bg-[rgb(236,87,87)]">
              <button className="pt-4 w-[41px] h-[15px] font-bold text-[12px] text-white">
                Delete
              </button>
            </div>
            <div className="w-[131px] h-[48px] rounded-[24px] bg-[rgb(124,93,250)] text-center">
              <button className="p-4 text-[rgb(255,255,255)] text-[12px] font-bold  ">
                Mark as Paid
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default SingleInvoice;
