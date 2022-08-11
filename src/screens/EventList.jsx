import evenements from "../assets/data/events.json";
import { useState } from "react";
import React from "react";
import Event from "../components/Event";

function EventList() {
  const [eventList, setEventList] = useState(evenements);

  const [filterRed, setFilterRed] = useState(false);
  const [filterBlue, setFilterBlue] = useState(false);
  const [filterGreen, setFilterGreen] = useState(false);

  const checkCreteria = (e) => {
    e.preventDefault();
    let result = evenements;
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
  };

  return (
    <>
      <div>
        <div className="tagFilter">
          <fieldset>
            <legend>Filtres des évenements:</legend>
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
            <button type="submit" onClick={checkCreteria}>
              Recherche
            </button>
          </fieldset>
        </div>
        {eventList.map((eventList) => (
          <div key={eventList.id}>
            <Event {...eventList} />
          </div>
        ))}
      </div>
    </>
  );
}

export default EventList;
