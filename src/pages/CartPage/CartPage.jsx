import React from "react";
import { useSelector } from "react-redux";
import OrgerItem from "../../components/OrgerItem/OrgerItem";
import { calcToltalPricse } from "../../components/utlits";
import "./CartPage.css";

const CartPage = () => {
  const items = useSelector((state) => state.cart.itemsInCart);
  if (items.length < 1) {
    return <h1>Nussing here</h1>;
  }
  return (
    <div className="orgerPage">
      <div className="orgerPageleft">
        {items.map((game) => (
          <OrgerItem game={game} />
        ))}
      </div>
      <div className="orgerPageRight">
        <div className="orgerPageTottalPrise">
          <span>
            {items.length} на сумму {calcToltalPricse(items)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
