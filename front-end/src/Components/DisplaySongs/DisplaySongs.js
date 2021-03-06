import "./DisplaySongs.css";

const DisplaySongs = ({ songsData, deleteSong, editSong, addSong, alert }) => {
  if (!songsData) {
    return (
      <div>
        <h3 className="div-center">{alert}</h3>
        <button className="button add-btn btn-center" onClick={addSong}>
          <i className="fas fa-plus add-icon"></i>NEW SONG
        </button>
      </div>
    );
  }

  if (songsData.length === 0) {
    return (
      <div>
        <h3 className="div-center">{alert}</h3>
      </div>
    );
  }

  return (
    <>
      <table
        className="table table-block table-hover"
        style={{ margin: "0 2rem !important" }}
      >
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
            <th>
              <button className="button add-btn" onClick={addSong}>
                <i className="fas fa-plus add-icon"></i>NEW SONG
              </button>
            </th>
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
                  <button className="button" onClick={() => editSong(song)}>
                    edit
                  </button>
                  <button
                    className="button"
                    onClick={() => deleteSong(song.id)}
                  >
                    delete
                  </button>
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
