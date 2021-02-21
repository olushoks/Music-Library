import React from "react";
import "./songFilter.css";

function Filter(props) {
  return (
    <form>
      <label htmlFor="filterCriteria">Filter the Music Library</label>
      <select
        name="filterCriteria"
        id="filterCriteria"
        onChange={props.onFilterChange}
        autoFocus
        required
      >
        {props.selectOptions.map((option) => {
          if (option === "id") {
            return <option key={""}>{}</option>;
          }
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </select>
      <input
        type="text"
        placeholder="enter text to filter by"
        onChange={props.onTextChange}
      ></input>
      <button onClick={props.onClick}>Filter</button>
    </form>
  );
}

export default Filter;
