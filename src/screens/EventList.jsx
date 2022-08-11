import evenements from "../assets/data/events.json";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import React from "react";
import Event from "../components/Event";
import "../assets/styles/screens/_EventList.scss";

function EventList() {
  const [eventList, setEventList] = useState(evenements);
  const [filterRed, setFilterRed] = useState(false);
  const [filterBlue, setFilterBlue] = useState(false);
  const [filterGreen, setFilterGreen] = useState(false);

  const [postsPerPage] = useState(7);
  const [offset, setOffset] = useState(1);
  const [posts, setAllPosts] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [object, setObject] = useState(evenements);

  const checkCreteria = (e) => {
    e.preventDefault();
    let result = object;
    result = filterRed
      ? result
      : result.filter((filt) => !filt.tag.includes("conférences"));
    result = filterBlue
      ? result
      : result.filter((filt) => !filt.tag.includes("festival"));
    result = filterGreen
      ? result
      : result.filter((filt) => !filt.tag.includes("séjour"));

    setEventList(result);
    setAllPosts(getPostData(result));
  };
  const getPostData = (arr) => {
    return arr.map(
      (eventC) =>
        console.log(eventC) || (
          <div key={eventC.id} className="flexObject">
            <div>
              <Event {...eventC} />
            </div>
          </div>
        )
    );
  };
  const getAllPosts = async () => {
    const slice = evenements.slice(
      (offset - 1) * postsPerPage,
      postsPerPage * offset
    );
    console.log(slice);
    // For displaying Data
    const postData = getPostData(slice);
    console.log(postData);
    // Using Hooks to set value
    setAllPosts(postData);
    setObject(slice);
    setPageCount(Math.ceil(evenements.length / postsPerPage));
  };

  const handlePageClick = (ev) => {
    const selectedPage = ev.selected;
    setOffset(selectedPage + 1);
    getAllPosts();
  };

  useEffect(() => {
    getAllPosts();
  }, [offset]);
  return (
    <div className="tout">
      {console.log({ offset })}
      <div className="containerFilter">
        <a id="hautPage"></a>
        <div className="tagFilter">
          <h3 className="TitleEvent">
            Bienvenue sur l'agenda de la Cosmoconie !
          </h3>
          <legend className="EventTitle">Filtres des évenements:</legend>
          <div className="ici">
            <input
              id="tags"
              type="checkbox"
              value="conférence"
              name="Conférences"
              onChange={(e) => setFilterRed(e.target.checked)}
            />
            <label htmlFor="tagsConférence">Conférences</label>
            <input
              type="checkbox"
              value="festivals"
              name="Festivals"
              onChange={(e) => setFilterBlue(e.target.checked)}
            />
            <label htmlFor="tagsFestivals">Festivals</label>
            <input
              type="checkbox"
              value="séjour"
              name="Séjours"
              onChange={(e) => setFilterGreen(e.target.checked)}
            />
            <label htmlFor="tagsSéjour">Séjours</label>
            <button
              type="submit"
              onClick={checkCreteria}
              className=".EventButton"
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
    </div>
  );
}

export default EventList;
