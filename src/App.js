import React, { useState } from "react";
import "./App.css";
import Movies from "./components/Movies/Movies";
import SearchInput from "./components/SearchInput/SearchInput";

function App() {
  const [searchKey, setSearch] = useState("");
  const [year, setYear] = useState("");

  return (
    <div className="App">
      <p className={`${searchKey !== "" ? "hidden" : "welcome-msg"}`}>
        Hello World,
        <br /> Search for your favorite movies
      </p>
      <div className={searchKey === "" ? "centered" : null}>
        <SearchInput onKeyChange={setSearch} onYearChange={setYear} />
      </div>
      {searchKey !== "" ? <Movies searchKey={searchKey} year={year} /> : null}
      <br></br>
      <br></br>
      <h2 style={{ color: "white" }}>Top IMDB</h2>
      {searchKey === "" && (
        <div className={"favorites"}>
          <img
            className="movie-img"
            height={"300px"}
            width={"220px"}
            src={`https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fstatic.rogerebert.com%2Fuploads%2Fmovie%2Fmovie_poster%2Fthe-shawshank-redemption-1994%2Flarge_9O7gLzmreU0nGkIB6K3BsJbzvNv.jpg&f=1&nofb=1`}
            alt="redepmtion"
          />
          <img
            className="movie-img"
            height={"300px"}
            width={"220px"}
            src={`https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs-media-cache-ak0.pinimg.com%2F564x%2F8b%2F1b%2F3b%2F8b1b3b865f3f4b54b83347da5fa408bb.jpg&f=1&nofb=1`}
            alt="the godfather"
          />
          <img
            className="movie-img"
            height={"300px"}
            width={"220px"}
            src={`https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F5151N2hUPiL._AC_SY450_.jpg&f=1&nofb=1`}
            alt="dark knight"
          />
        </div>
      )}
    </div>
  );
}

export default App;
