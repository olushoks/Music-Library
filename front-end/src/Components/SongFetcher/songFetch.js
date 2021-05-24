import React, { Component } from "react";
import Filter from "../SongFilter/songFilter";
import MoreAction from "../MoreActions/moreActions";
import "./songFetch.css";
import axios from "axios";

class GetAllSongs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songsData: [],
      headers: [],
      currentTable: [],
      filterBy: "",
      filterText: "",
    };
  }

  async componentDidMount() {
    await axios
      // .get("http://www.devcodecampmusiclibrary.com/api/music")
      .get("http://localhost:5000/api/songs/get")
      .then((response) => {
        const songsData = response.data;
        this.setState({ songsData, currentTable: songsData });
      });
    // .catch(alert("Unable to access the Songs Library at this time!"));

    // Get keys to use as table headers and filter options
    const headers = Object.keys(this.state.songsData[0]);
    // Capitalize the text in the filter selection
    headers[headers.indexOf("releaseDate")] = "Release Date";
    this.setState({ headers });
  }

  //Method to key object keys as TABLE HEADERS
  tableHeaders = () => {
    return this.state.headers.map((el) => {
      return (
        <th key={el} scope="col">
          {el}
        </th>
      );
    });
  };

  //Method to get TABLE BODY DATA
  tableBody = () => {
    const { currentTable } = this.state;

    return currentTable.map((el) => {
      return (
        <tr key={el.id} className="table-row">
          <td>{el.id}</td>
          <td>{el.title}</td>
          <td>{el.album}</td>
          <td>{el.artist}</td>
          <td>{el.genre}</td>
          <td>{el.releaseDate}</td>
        </tr>
      );
    });
  };

  // Handle change in Filter Criteria
  handleChangeFilterCriteria = (e) => {
    e.preventDefault();
    const filterBy = e.target.value;
    this.setState({
      filterBy,
    });
  };

  // Handle change in Filter Text
  handleChangeFilterText = (e) => {
    e.preventDefault();
    let filterText = e.target.value;

    filterText = filterText.toLowerCase();
    this.setState({
      filterText,
    });
  };

  // Filter Button Click
  filterTable = (e) => {
    e.preventDefault();
    let { filterBy, filterText, currentTable, songsData } = this.state;
    filterBy = filterBy === "Release Date" ? "releaseDate" : filterBy;

    if (filterBy === undefined) {
      alert("Choose an option to filter by!");
    }
    if (filterText === undefined) {
      alert("Enter some text!");
    }

    if (filterBy && filterText) {
      currentTable = songsData.filter((el) => {
        if (el[filterBy].toLowerCase().includes(filterText)) {
          return true;
        }
        return false;
      });
    }
    this.setState({
      currentTable,
    });
  };

  clearFilter = (e) => {
    e.preventDefault();
    let { filterBy, filterText, currentTable, songsData } = this.state;
    currentTable = songsData;
    filterBy = "";
    filterText = "";

    this.setState({
      currentTable,
      filterBy,
      filterText,
    });
  };

  // Function to call to render table
  renderTable = () => {
    return this.state.songsData.length > 0 ? (
      <div>
        <table className="table table-block table-hover">
          <thead className="table-header">
            <tr>{this.tableHeaders()}</tr>
          </thead>
          <tbody>{this.tableBody()}</tbody>
        </table>
      </div>
    ) : (
      <div className="no-result">No Song in the library at this time</div>
    );
  };

  render() {
    return (
      <div>
        <MoreAction currentTable={this.state.currentTable} />
        <Filter
          selectOptions={this.state.headers}
          onFilterChange={this.handleChangeFilterCriteria}
          onTextChange={this.handleChangeFilterText}
          filter={this.filterTable}
          clearFilter={this.clearFilter}
        />
        {this.renderTable()}
      </div>
    );
  }
}

export default GetAllSongs;
