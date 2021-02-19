import axios from "axios";

function GetAllSongs() {
  axios
    .get("http://www.devcodecampmusiclibrary.com/api/music")
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });

  return null;
}

export default GetAllSongs;
