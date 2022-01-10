import React from "react";
import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";
import { calcToltalPricse } from "../utlits";
import "./CartMenu.css";

const CartMenu = ({ items, onClick }) => {
  return (
    <div className="cart-menu">
      <div className="cart-menu-games-item">
        {items.length > 0
          ? items.map((game) => (
              <CartItem
                key={game.title}
                price={game.price}
                title={game.title}
                id={game.id}
              />
            ))
          : "Корзина пуста"}
      </div>
      {items.length > 0 ? (
        <div className="cart-meu-arrange">
          <div className="cart-menu-total-price">
            <span>Итог</span>
            <span>{calcToltalPricse(items)} грн.</span>
          </div>
          <Button type="primary" size="m" onClick={onClick}>
            оформить заказ
          </Button>
        </div>
      ) : null}
    </div>
  );
};
export default CartMenu;
