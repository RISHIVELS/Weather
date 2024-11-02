import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import Content from "../components/Content";

function SearchBar() {
  const [name, setName] = useState();
  const [data, setData] = useState();

  async function handleSubmit() {
    const res = await fetch(
      `https://api.tomorrow.io/v4/weather/forecast?location=${name}&apikey=L3w7P546UZ2noLFjhHRpaYXKHFZwiL7n`
    );
    const weather = await res.json();
    setData(weather);
    console.log(weather);
  }

  return (
    <>
      <div className="flex gap-x-5 sm:gap-x-10 items-center">
        <input
          type="text"
          placeholder="Search your Area"
          className="p-2 rounded-md px-4 sm:px-8 sm:py-3"
          onChange={(e) => setName(e.target.value)}
        />
        <span className="text-white bg-sky-800 p-4 sm:p-5 rounded-full">
          <button onClick={handleSubmit}>
            {" "}
            <FaSearch />
          </button>
        </span>
      </div>
      <Content data={data} />
    </>
  );
}

export default SearchBar;
