import React, { useState } from "react";
import "./songFilter.css";

const Filter = ({ selectOptions }) => {
  const [filterCriteria, setFilterCriteria] = useState("");
  const [filterText, setFilterText] = useState("");

  if (!selectOptions) return null;

  return (
    <div className="container-fluid">
      <form className="form">
        <label className="label" htmlFor="filterCriteria">
          Filter the Music Library
        </label>
        <select
          className="select"
          name="filterCriteria"
          id="filterCriteria"
          value={filterCriteria}
          onChange={(e) => setFilterCriteria(e.target.value)}
          required
        >
          {Object.keys(selectOptions).map((option) => {
            if (option === "id") {
              return <option key="" defaultValue=""></option>;
            }
            return (
              <option key={option} value={option}>
                {option}
              </option>
            );
          })}
        </select>
        <input
          className="input"
          type="text"
          name="filterText"
          value={filterText}
          placeholder="enter text to filter by"
          onChange={(e) => setFilterText(e.target.value)}
        ></input>
        <button className="button" onClick={() => console.log("Filter")}>
          Filter
        </button>
        <button className="button" onClick={() => console.log(" Clear Filter")}>
          Clear Filter
        </button>
      </form>
    </div>
  );
};

export default Filter;
