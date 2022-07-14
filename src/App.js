import React, { useState } from "react";
import "./App.css";
import Movies from "./components/Movies/Movies";
import TopImdb from "./components/Movies/TopIMDB";
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
      <br></br>
      {searchKey !== "" ? <Movies searchKey={searchKey} year={year} /> : null}
      <br></br>
      <br></br>
      {searchKey === "" && <TopImdb />}
      <footer className="footer">
        Copyright © 2021. Hadi Abu Hamed. All Rights Reserved.
      </footer>
    </div>
  );
}

export default App;
