"use client";
import { useSelector, useDispatch } from "react-redux";
import { drawerToggle } from "../redux/storeSlice";
function Drawer() {
  const dispatch = useDispatch();
  const { drawerOpen } = useSelector((store) => store.invoice);
  return (
    <div>
      {drawerOpen && (
        <div
          onClick={() => dispatch(drawerToggle())}
          className="absolute bg-black bg-opacity-50 w-full top-0 left-0 bottom-0 "
        ></div>
      )}
      <div
        className={` pl-[150px] pt-[56px] absolute bg-white left-0 bottom-0 top-0 w-[719px] z-10 transition -translate-x-full ${
          drawerOpen && "translate-x-0 "
        }  duration-300  `}
      >
        ddd
      </div>
    </div>
  );
}

export default Drawer;
