import React, { useState, useEffect } from "react";
import Filter from "../SongFilter/songFilter";
import MoreAction from "../MoreActions/moreActions";
import "./DisplaySongs.css";
import axios from "axios";

const DisplaySongs = ({ songsData }) => {
  // const [currentTable, setCurrentTable] = useState([]);
  // const [filterBy, setFilterBy] = useState("");
  // const [filterText, setFilterText] = useState("");
  // const [action, setAction] = useState("");
  // const [headers, setHeaders] = useState([]);

  // if (!songsData || songsData.length === 0) return null;

  // DELETE SONG
  // const deleteSong = (id) => {
  //   //REMOVE FROM UII
  //   const newSongsTable = this.state.currentTable.filter(
  //     (song) => song.id !== id
  //   );
  //   this.setState({ currentTable: newSongsTable });

  //   //REMOVE FROM DB
  //   axios.delete(`http://localhost:5000/api/songs/delete/${id}`).then((res) => {
  //     this.setState({ songsData: res.data });
  //   });
  // };

  // //EDIT SONG
  // const editSong = (song) => {
  //   this.setState({ action: "edit" });
  //   console.log(song);
  // };

  // Get keys to use as table headers and filter options
  // const headers = Object.keys(songsData[0]);
  // Capitalize the text in the filter selection
  // headers[headers.indexOf("releaseDate")] = "Release Date";
  // setHeaders(headers);

  //Method to key object keys as TABLE HEADERS
  // const tableHeaders = () => {
  //   const headers = this.state.headers.map((el) => {
  //     return (
  //       <th key={el} scope="col">
  //         {el}
  //       </th>
  //     );
  //   });
  //   return (
  //     <>
  //       {headers}
  //       <th>MODIFY</th>
  //     </>
  //   );
  // };

  // //Method to get TABLE BODY DATA
  // const tableBody = () => {
  //   const { currentTable } = this.state;

  //   return currentTable.map((el) => {
  //     return (
  //       <>
  //         <tr key={el.id} className="table-row">
  //           <td>{el.id}</td>
  //           <td>{el.title}</td>
  //           <td>{el.album}</td>
  //           <td>{el.artist}</td>
  //           <td>{el.genre}</td>
  //           <td>{el.releaseDate}</td>
  //           <td>
  //             <button onClick={() => editSong(el)}>edit</button>
  //             <button onClick={() => deleteSong(el.id)}>delete</button>
  //           </td>
  //         </tr>
  //       </>
  //     );
  //   });
  // };

  // Handle change in Filter Criteria
  // const handleChangeFilterCriteria = (e) => {
  //   e.preventDefault();
  //   const filterBy = e.target.value;
  //   this.setState({
  //     filterBy,
  //   });
  // };

  // // Handle change in Filter Text
  // const handleChangeFilterText = (e) => {
  //   e.preventDefault();
  //   let filterText = e.target.value;

  //   filterText = filterText.toLowerCase();
  //   this.setState({
  //     filterText,
  //   });
  // };

  // // Filter Button Click
  // const filterTable = (e) => {
  //   e.preventDefault();
  //   let { filterBy, filterText, currentTable, songsData } = this.state;
  //   filterBy = filterBy === "Release Date" ? "releaseDate" : filterBy;

  //   if (filterBy === undefined) {
  //     alert("Choose an option to filter by!");
  //   }
  //   if (filterText === undefined) {
  //     alert("Enter some text!");
  //   }

  //   if (filterBy && filterText) {
  //     currentTable = songsData.filter((el) => {
  //       if (el[filterBy].toLowerCase().includes(filterText)) {
  //         return true;
  //       }
  //       return false;
  //     });
  //   }
  //   this.setState({
  //     currentTable,
  //   });
  // };

  // const clearFilter = (e) => {
  //   e.preventDefault();
  //   let { filterBy, filterText, currentTable, songsData } = this.state;
  //   currentTable = songsData;
  //   filterBy = "";
  //   filterText = "";

  //   this.setState({
  //     currentTable,
  //     filterBy,
  //     filterText,
  //   });
  // };

  // Function to call to render table
  // const renderTable = () => {
  //   return this.state.songsData.length > 0 ? (
  //     <div>
  //       <table className="table table-block table-hover">
  //         <thead className="table-header">
  //           <tr>{this.tableHeaders()}</tr>
  //         </thead>
  //         <tbody>{this.tableBody()}</tbody>
  //       </table>
  //     </div>
  //   ) : (
  //     <div className="no-result">No Song in the library at this time</div>
  //   );
  // };

  if (!songsData || songsData.length === 0) {
    return <h3>No Songs</h3>;
  }

  return (
    <>
      <table className="table table-block table-hover">
        <thead className="table-header">
          <tr>
            {Object.keys(songsData[0]).map((el) => {
              el = el === "releaseDate" ? "Release Date" : el;
              el = el === "id" ? "" : el;
              return (
                <th key={el} scope="col">
                  {el}
                </th>
              );
            })}
            <th>MODIFY</th>
          </tr>
        </thead>
        <tbody>
          {songsData.map((song, index) => {
            return (
              <tr key={song.id} className="table-row">
                <td>{index + 1}</td>
                <td>{song.title}</td>
                <td>{song.album}</td>
                <td>{song.artist}</td>
                <td>{song.genre}</td>
                <td>{song.releaseDate}</td>
                <td>
                  <button onClick={() => console.log("Edit")}>edit</button>
                  {/* <button onClick={() => editSong(song)}>edit</button> */}
                  <button onClick={() => console.log("delete")}>delete</button>
                  {/* <button onClick={() => deleteSong(song.id)}>delete</button> */}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default DisplaySongs;
