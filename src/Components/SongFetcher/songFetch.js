import React, { Component } from "react";
import axios from "axios";

class GetAllSongs extends Component {
  constructor(props) {
    super(props);
    this.state = { songsData: [] };
  }

  async componentDidMount() {
    await axios
      .get("http://www.devcodecampmusiclibrary.com/api/music")
      .then((response) => {
        const songsData = response.data;
        this.setState({ songsData });
        console.log(songsData);
      });
  }

  //Method to key object keys as TABLE HEADERS
  tableHeaders = () => {
    const { songsData } = this.state;
    const header = Object.keys(songsData[0]);
    console.log(header);
    return header.map((el) => {
      return <th key={el}>{el}</th>;
    });
  };

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

  render() {
    return this.state.songsData.length > 0 ? (
      <table>
        <thead>
          <tr>{this.tableHeaders()}</tr>
        </thead>
        <tbody>{this.tableBody()}</tbody>
      </table>
    ) : (
      <div>No results Found</div>
    );
  }
}

export default GetAllSongs;
