import { React, useState } from "react";

export default function CharacterFinder() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <h1>Star Wars character finder</h1>
      <form>
        <label>
          Search for a movie to find characters:
          <input
            type="text"
            value={searchTerm}
            placeholder="example: 'new hope'"
            onChange={(input) => setSearchTerm(input.target.value)}
          ></input>
        </label>
        <input type="submit" value="search" className="button"></input>
      </form>
    </div>
  );
}
