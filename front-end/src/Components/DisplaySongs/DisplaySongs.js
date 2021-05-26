import React, { useState, useEffect } from "react";
import Filter from "../SongFilter/songFilter";
import MoreAction from "../MoreActions/moreActions";
import "./DisplaySongs.css";
import axios from "axios";

const DisplaySongs = ({ songsData, deleteSong, editSong, alert }) => {
  if (!songsData || songsData.length === 0) {
    return <h3>{alert}</h3>;
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
                  <button onClick={() => editSong(song)}>edit</button>

                  <button onClick={() => deleteSong(song.id)}>delete</button>
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
