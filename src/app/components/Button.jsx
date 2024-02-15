"use client";
import { useEffect, useState } from "react";

function Button({ status }) {
  const [color, setColor] = useState("");
  useEffect(() => {
    switch (status) {
      case "paid":
        setColor("bg-emerald-300");
        break;
      case "pending":
        setColor("bg-orange-300");
        break;
      case "draft":
        setColor("bg-slate-300");
        break;
      default:
        setColor("");
    }
  }, [status]);
  if (status) {
    return <button className={`capitalize btn ${color} rounded-md w-[104px] h-[40px]`}>{status}</button>;
  }
}

export default Button;
