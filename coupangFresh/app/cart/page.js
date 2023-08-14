import React from "react";

export default function Cart() {
  let cartItems = ["Tomatoes", "Pasta"];
  return (
    <div>
      <h4 className="title">Cart</h4>
      {cartItems.map((cart) => {
        return <CartItem cart={cart} />;
      })}
      <Banner color="blue" />
    </div>
  );
}

function Banner({ color }) {
  return (
    <div className="banner">
      <div className={color === "blue" ? `banner-bg` : "banner-bg-red"}>현대카드 결제 행사중</div>
    </div>
  );
}

function CartItem({ cart }) {
  return (
    <>
      <div className="cart-item">
        <p>{cart}</p>
        <p>$40</p>
        <p>1개</p>
      </div>
    </>
  );
}
