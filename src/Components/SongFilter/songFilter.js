import React, { Component } from "react";
import GetAllSongs from "../SongFetcher/songFetch";
import "./songFilter.css";

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterCriteria: "",
      searchFor: "",
    };
  }

  handleChange = (event) => {
    const { filterCriteria, searchFor } = this.state;
    this.setState({
      [event.target.name]: event.target.value,
    });
    // console.log(filterCriteria, searchFor);
  };

  render() {
    return (
      <div>
        <form>
          <label for="filterCriteria">Filter the Music Library</label>
          <select name="filterCriteria" id="filterCriteria" autofocus required>
            <option></option>
            <option value="title" onChange={this.handleChange}>
              title
            </option>
            <option value="album" onChange={this.handleChange}>
              Album
            </option>
            <option value="artist" onChange={this.handleChange}>
              Artist
            </option>
            <option value="genre" onChange={this.handleChange}>
              Genre
            </option>
            <option value="releaseDate" onChange={this.handleChange}>
              Release Date
            </option>
          </select>
          <input
            type="text"
            placeholder="enter text to filter by"
            onChange={this.handleChange}
          ></input>
          <input type="submit" value="Filter"></input>
        </form>
        <GetAllSongs />
      </div>
    );
  }
}

export default Filter;
