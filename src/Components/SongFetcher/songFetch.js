import React, { Component } from "react";
import "./songFetch.css";
import Filter from "../SongFilter/songFilter";
import axios from "axios";

class GetAllSongs extends Component {
  constructor(props) {
    super(props);
    this.state = { songsData: [], headers: [] };
  }

  async componentDidMount() {
    await axios
      .get("http://www.devcodecampmusiclibrary.com/api/music")
      .then((response) => {
        const songsData = response.data;
        this.setState({ songsData });
      });

    // Get keys to use as table headers and filter options
    const headers = Object.keys(this.state.songsData[0]);
    this.setState({ headers });

    console.log(this.state.headers);
    console.log(this.state.songsData);
  }

  //Method to key object keys as TABLE HEADERS
  tableHeaders = () => {
    return this.state.headers.map((el) => {
      return <th key={el}>{el}</th>;
    });
  };

  //Method to get TABLE BODY DATA
  tableBody = () => {
    const { songsData } = this.state;
    return songsData.map((el) => {
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

  // const renderTable = this.state.songsData.length > 0 ? (
  //       <table className="table-block">
  //         <thead className="table-header">
  //           <tr>{this.tableHeaders()}</tr>
  //         </thead>
  //         <tbody>{this.tableBody()}</tbody>
  //       </table>
  //       ) : (<div>No results Found</div>
  //       )

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
          onChange={this.handleChange}
          onCliick={this.handleClick}
        />
        {this.renderTable()};
      </div>
    );
  }
}

export default GetAllSongs;
