import { useState, useEffect } from "react";
import Item from "../components/Item";
import Items from "../assets/data/Items.json";
import ReactPaginate from "react-paginate";
import Cart from "../components/Cart";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

function Shop() {
  const [items, setItems] = useState(Items);
  const [filterRed, setFilterRed] = useState(false);
  const [filterBlue, setFilterBlue] = useState(false);
  const [filterGreen, setFilterGreen] = useState(false);

  const [postsPerPage] = useState(6);
  const [offset, setOffset] = useState(1);
  const [posts, setAllPosts] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [object, setObject] = useState(Items);

  const checkCreteria = (e) => {
    e.preventDefault();
    let result = object;
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

    setAllPosts(getPostData(result));
  };
  const getPostData = (arr) => {
    return arr.map(
      (item) =>
        console.log(item) || (
          <div className="container" key={item.id}>
            <div className="Item">
              <div className="ItemTitle">
                <h3>{item.nom}</h3>
              </div>

              <img
                className="ItemImage"
                src={require(`../assets/images/shop/${item.image}`)}
                alt={item.nom}
              />

              <div className="ItemDescription">
                <p>{item.description}</p>
                <p>Prix: {item.prix}</p>
                {/* <p>Type d'objet: {item.tag}</p> */}
                <Cart />
              </div>
            </div>
          </div>
        )
    );
  };
  const getAllPosts = async () => {
    const slice = Items.slice(offset - 1, offset - 1 + postsPerPage);
    console.log(slice);
    // For displaying Data
    const postData = getPostData(slice);
    console.log(postData);
    // Using Hooks to set value
    setAllPosts(postData);
    setObject(slice);
    setPageCount(Math.ceil(Items.length / postsPerPage));
  };

  const handlePageClick = (event) => {
    const selectedPage = event.selected;
    setOffset(selectedPage + 1);
  };

  useEffect(() => {
    getAllPosts();
  }, [offset]);
  return (
    <>
      <div className="GrosseDiv">
        <div className="ShopFilter">
          <h3 className="ShopTitle">Le marché sur des oeufs</h3>
          
          <a href="/shop" className=""><ShoppingCartIcon />Panier</a>
        
          <div className="bandeau">
            <legend className="filter-label">Filtres des objets:</legend>

            <input
              id="tags"
              className="filter-box"
              type="checkbox"
              value="survivance"
              name="Survivance"
              onChange={(e) => setFilterRed(e.target.checked)}
            />
            <label className="filter-label" htmlFor="tagssurvivance">
              Survivance
            </label>

            <input
              type="checkbox"
              className="filter-box"
              value="quotidien"
              name="Quotidien"
              onChange={(e) => setFilterBlue(e.target.checked)}
            />
            <label className="filter-label" htmlFor="tagsquotidien">
              Culte
            </label>

            <input
              type="checkbox"
              className="filter-box"
              value="culte"
              name="Culte"
              onChange={(e) => setFilterGreen(e.target.checked)}
            />
            <label className="filter-label" htmlFor="tagsculte">
              Quotidien
            </label>
            <button
              className="ShopButton"
              type="submit"
              onClick={checkCreteria}
            >
              Recherche
            </button>
            <ReactPaginate
              previousLabel={"previous"}
              nextLabel={"next"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={pageCount}
              onPageChange={handlePageClick}
              containerClassName={"pagination"}
              subContainerClassName={"pages pagination"}
              activeClassName={"active"}
            />
          </div>
        </div>

        <div className="main-app">
          {/* Display all the posts */}
          {posts}

          {/* Using React Paginate */}
        </div>
      </div>
    </>
  );
}

export default Shop;
