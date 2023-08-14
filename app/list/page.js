"use client";
import React, { useState } from "react";

export default function List() {
  let fruitItems = ["Tomatoes", "Pasta", "Coconut"];
  return (
    <>
      <div className="title">상품목록</div>

      {fruitItems.map((item, index) => {
        return (
          <div className="food" key={index}>
            <ItemList item={item} index={index} />
          </div>
        );
      })}
    </>
  );
}

function ItemList({ item, index }) {
  const [count, setCount] = useState(0);
  const onClickCountPlus = () => {
    setCount((prev) => prev + 1);
  };
  const onClickCountMinus = () => {
    if (count === 0) return;
    setCount((prev) => prev - 1);
  };
  return (
    <>
      <img src={`https://codingapple.com/wp-content/uploads/2023/01/food${index}.png`} className="food-img" />
      <h4>{item} $40</h4>
      <button onClick={() => onClickCountMinus()}>-</button>
      <span>{count}</span>
      <button onClick={() => onClickCountPlus()}>+</button>
    </>
  );
}
