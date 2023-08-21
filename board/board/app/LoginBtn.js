"use client";

import React from "react";
import { signIn, signOut } from "next-auth/react";

export default function LoginBtn({ props, userName }) {
  return (
    <>
      <button
        onClick={() => {
          props === "로그아웃" ? signOut() : signIn();
        }}
      >
        {props}
      </button>
      {userName && <p>{userName}님 안녕하세요.</p>}
    </>
  );
}
