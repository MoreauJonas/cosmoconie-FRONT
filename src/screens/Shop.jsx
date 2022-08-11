import { useState } from "react";
import Item from "../components/Item";
import Items from "../assets/data/Items.json";

function Shop() {
  const [items, setItems] = useState(Items);
  const [filterRed, setFilterRed] = useState(false);
  const [filterBlue, setFilterBlue] = useState(false);
  const [filterGreen, setFilterGreen] = useState(false);

  const checkCreteria = (e) => {
    e.preventDefault();
    let result = Items;
    result = filterRed
      ? result
      : result.filter((filt) => !filt.tag.includes("survivance"));
    result = filterBlue
      ? result
      : result.filter((filt) => !filt.tag.includes("culte"));
    result = filterGreen
      ? result
      : result.filter((filt) => !filt.tag.includes("quotidien"));

    setItems(result);
  };
  return (
    <>
      <p className="ShopTitle">Le marché sur des oeufs</p>
      <div className="tagFilter">
        <fieldset>
          <legend>Filtres des objets:</legend>

          <input
            id="tags"
            type="checkbox"
            value="survivance"
            name="Survivance"
            onChange={(e) => setFilterRed(e.target.checked)}
          />
          <label htmlFor="tagssurvivance">Survivance</label>

          <input
            type="checkbox"
            value="quotidien"
            name="Quotidien"
            onChange={(e) => setFilterBlue(e.target.checked)}
          />
          <label htmlFor="tagsquotidien">Culte</label>

          <input
            type="checkbox"
            value="culte"
            name="Culte"
            onChange={(e) => setFilterGreen(e.target.checked)}
          />
          <label htmlFor="tagsculte">Quotidien</label>
          <button type="submit" onClick={checkCreteria}>
            Recherche
          </button>
        </fieldset>
      </div>
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
