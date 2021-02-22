import React, { Component } from "react";
import "./songFetch.css";
import Filter from "../SongFilter/songFilter";
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
      .get("http://www.devcodecampmusiclibrary.com/api/music")
      .then((response) => {
        const songsData = response.data;
        this.setState({ songsData, currentTable: songsData });
      })
      .catch(alert("Loading"));

    // Get keys to use as table headers and filter options
    const headers = Object.keys(this.state.songsData[0]);
    this.setState({ headers });
  }

  //Method to key object keys as TABLE HEADERS
  tableHeaders = () => {
    return this.state.headers.map((el) => {
      return <th key={el}>{el}</th>;
    });
  };

  //Method to get TABLE BODY DATA
  tableBody = () => {
    const { currentTable } = this.state;
    return currentTable.map((el) => {
      return (
        <tr key={el.id}>
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
    const filterText = e.target.value;
    this.setState({
      filterText,
    });
  };

  // Filter Button Click
  filterTable = (e) => {
    e.preventDefault();
    let { filterBy, filterText, currentTable, songsData } = this.state;

    // if (filterText === undefined && filterBy === undefined) {
    //   alert("Please narrow you search!");
    // }
    if (filterBy === undefined) {
      alert("Choose an option to filter by!");
    }
    if (filterText === undefined) {
      alert("Enter some text!");
    }

    if (filterBy && filterText) {
      currentTable = songsData.filter((el, index) => {
        if (el[filterBy].includes(filterText)) {
          el.ID = index + 1;
          return true;
        }
        return false;
      });
    }
    // if (filterBy !== undefined && filterText !== undefined) {
    //   currentTable = songsData.filter((el) => {
    //     if (el[filterBy].includes(filterText)) {
    //       return true;
    //     }
    //   });
    // }
    this.setState({
      currentTable,
    });
    // console.log(currentTable);
    // console.log(songsData);
    // console.log(filterBy);
    // console.log(filterText);
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
      <table className="table-block">
        <thead className="table-header">
          <tr>{this.tableHeaders()}</tr>
        </thead>
        <tbody>{this.tableBody()}</tbody>
      </table>
    ) : (
      <div>No results Found</div>
    );
  };

  render() {
    return (
      <div>
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
