import { useState } from "react";
import Item from "../components/Item";
import Items from "../assets/data/Items.json";

function Shop() {
  const [items, setItems] = useState(Items);

  return (
    <>
    <p className="ShopTitle">SHOP</p>
      <div className="Shop">
        {items.map((item) => (
          <div key={item.id}>
            <Item {...item} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Shop;
