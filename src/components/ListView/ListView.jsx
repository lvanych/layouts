import React from "react";
import ShopItem from "./ShopItem";
import './styleShopItem.css';

const ListView = ({ cards }) => (
    <ul className="list">
        {cards.map((card, index) => (
            <li key={index}>
                <ShopItem  card={card}/>
            </li>
        ))}
    </ul>
);

export default ListView;
