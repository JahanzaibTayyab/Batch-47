"use client";

import React from "react";
import { useRouter } from "next/navigation";

function NamePage() {
  const router = useRouter();

  const handelAddress = () => {
    setTimeout(() => {
      router.push("/name/address");
    }, 3000);
  };

  return (
    <div className="p-10">
      NamePage
      <div className="flex gap-5">
        <button
          className="p-2 bg-slate-400 rounded-md"
          onClick={() => router.back()}
        >
          Back
        </button>
        <button className="p-2 bg-slate-800 rounded-md" onClick={handelAddress}>
          Address
        </button>
        <button
          className="p-2 bg-blue-800 rounded-md"
          onClick={() => router.refresh()}
        >
          Refresh
        </button>
        <button
          className="p-2 bg-blue-400 rounded-md"
          onClick={() => router.replace("/")}
        >
          Replace
        </button>
      </div>
    </div>
  );
}

export default NamePage;
