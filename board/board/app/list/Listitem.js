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
              onClick={(e) => {
                fetch("/api/post/delete", { method: "DELETE", body: data._id })
                  .then((res) => {
                    if (res.status === 200) {
                      return res.json();
                    }
                  })
                  .then(() => {
                    e.target.parentElement.style.opacity = 0;
                    setTimeout(() => {
                      e.target.parentElement.style.display = "none";
                    }, 1000);
                  });
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
