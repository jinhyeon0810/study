"use client";
import Link from "next/link";
import React from "react";

export default function Listitem({ result }) {
  return (
    <div>
      {result.map((data, i) => {
        return (
          <div className="list-item" key={i}>
            <Link href={`/detail/${data._id.toString()}`}>
              <h4>{data.title}</h4>
            </Link>

            <Link href={`/edit/${data._id.toString()}`}>🖍</Link>
            <span
              onClick={() => {
                fetch("/api/post/delete"), { method: "DELETE", body: data._id };
              }}
            >
              🗑
            </span>
            <p>1월 1일</p>
          </div>
        );
      })}
    </div>
  );
}
