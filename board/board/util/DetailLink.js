"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function DetailLink() {
  let router = useRouter();
  return (
    <div className="button-home">
      <button
        onClick={() => {
          router.push("/");
        }}
      >
        홈
      </button>
    </div>
  );
}
