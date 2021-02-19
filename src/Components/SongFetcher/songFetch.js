import React, { Component } from "react";
import axios from "axios";

class GetAllSongs extends Component {
  constructor(props) {
    super(props);
    this.state = { songsData: [] };
  }

  componentDidCatch() {
    axios
      .get("http://www.devcodecampmusiclibrary.com/api/music")
      .then((response) => {
        const songsData = response.data;
        this.setState({ songsData: songsData });
      });
  }

  render() {
    return (
      <table>
        {this.state.songsData.map((songRecord) => {
          return (
            <fragment>
              <tr>{songRecord.id}</tr>
              <tr>{songRecord.title}</tr>
              <tr>{songRecord.album}</tr>
              <tr>{songRecord.artist}</tr>
              <tr>{songRecord.genre}</tr>
              <tr>{songRecord.releaseDate}</tr>
            </fragment>
          );
        })}
      </table>
    );
  }
}

export default GetAllSongs;

// fetchSongs() {
//   axios
//     .get("http://www.devcodecampmusiclibrary.com/api/music")
//     .then((response) => {
//       console.log(response.data);
//       this.setState({ songsData: response.data });
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }
