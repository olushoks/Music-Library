import React from "react";
import "./songFilter.css";

function Filter(props) {
  return (
    <form className="form">
      <label className="label" htmlFor="filterCriteria">
        Filter the Music Library
      </label>
      <select
        className="select"
        name="filterCriteria"
        id="filterCriteria"
        onChange={props.onFilterChange}
        autoFocus
        required
      >
        {props.selectOptions.map((option) => {
          if (option === "id") {
            return <option key={""} defaultValue=""></option>;
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
        placeholder="enter text to filter by"
        onChange={props.onTextChange}
      ></input>
      <button className="button" onClick={props.filter}>
        Filter
      </button>
      <button className="button" onClick={props.clearFilter}>
        Clear Filter
      </button>
    </form>
  );
}

export default Filter;
