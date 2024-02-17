"use client";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { drawerToggle } from "../redux/storeSlice";
function Navbar() {
  const dispatch=useDispatch()
  return (
    <>
      <nav className="container mt-[72px] flex justify-between items-center mb-[88px] ">
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
            <details className="dropdown">
              <summary className="m-1 text-[rgb(12,14,22)] font-bold text-xs leading-4">
                Filter by status
              </summary>
              <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                <li>
                  <label className="label cursor-pointer justify-start">
                    <input
                      type="checkbox"
                      // checked="checked"
                      className="checkbox checkbox-primary"
                    />
                    <span className="label-text">Paid</span>
                  </label>
                </li>
                <li>
                  <label className="label cursor-pointer justify-start">
                    <input
                      type="checkbox"
                      // checked="checked"
                      className="checkbox checkbox-primary"
                    />
                    <span className="label-text">Draft</span>
                  </label>
                </li>
                <li>
                  <label className="label cursor-pointer justify-start">
                    <input
                      type="checkbox"
                      // checked="checked"
                      className="checkbox checkbox-primary"
                    />
                    <span className="label-text">Pending</span>
                  </label>
                </li>
              </ul>
            </details>
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
              <button onClick={()=>dispatch(drawerToggle())} className="text-[rgb(255,255,255)] font-bold text-xs leading-[15px] text-left absolute  right-[25px] top-[15px]">
                New Invoice
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
