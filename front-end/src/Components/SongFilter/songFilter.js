import React, { useState } from "react";
import "./songFilter.css";

const Filter = ({ selectOptions, filterTable, clearFilter }) => {
  const [filterCriteria, setFilterCriteria] = useState("");
  const [filterText, setFilterText] = useState("");

  if (!selectOptions) return null;

  const handleFilter = (e) => {
    e.preventDefault();
    filterTable(filterCriteria, filterText);
  };

  const handleClearFilter = (e) => {
    e.preventDefault();
    setFilterCriteria("");
    setFilterText("");
    clearFilter();
  };

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
            option = option === "releaseDate" ? "Release Date" : option;
            option =
              option === "id" ? (
                <option key="" defaultValue=""></option>
              ) : (
                <option key={option} value={option}>
                  {option}
                </option>
              );
            return option;
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
        <button className="filter-button" onClick={handleFilter}>
          Filter
        </button>
        <button className="filter-button" onClick={handleClearFilter}>
          Clear Filter
        </button>
      </form>
    </div>
  );
};

export default Filter;
