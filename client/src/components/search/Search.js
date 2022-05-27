import React from "react";
import "./search.css";

const Search = ({ myinput, setMyinput }) => {
  return (
    <div>
      <input
        className="inputsearch"
        type="text"
        placeholder="Search activity by cathegory"
        onChange={(e) => setMyinput(e.target.value)}
        value={myinput}
      />
    </div>
  );
};

export default Search;
