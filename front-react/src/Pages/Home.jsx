import { useEffect, useState } from "react";
// import { getData } from "../Api/fetches.js";
import UseglobalState from "../Store/GlobalStore.js";
import SearchBar from "../Comps/SearchBar.jsx";
import { Link } from "react-router";

export default function Home() {
  const movies = UseglobalState((state) => state.movies);
  const fetchData = UseglobalState((state) => state.fetchData);
  const [filteredMovies, setFilteredMovies] = useState([]);
  //   const [data, setData] = useState([]);

  //   async function getDataLocal() {
  //     const data = await getData();
  //     if (!data) {
  //       return <h1>Loading...</h1>;
  //     }
  //     setData(data);
  //   }

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      <h1>Movies Night</h1>
      <h3>Search a movie and pick your seats</h3>
      <SearchBar originalMovies={movies} setFilterData={setFilteredMovies} />
      <p>Showing {movies.length} results </p>
      {movies ? (
        movies.map((movi) => {
          console.log(movi);
          return (
            <div
            onClick={
                <Link to={"/details"}></Link>
            }
              className="border rounded-2xl flex-col w-55 h-65"
              key={movi.imdbID}
            >
              <img
                className="w-55 rounded-2xl"
                src={movi.poster}
                alt="poster of the movie"
              />
              <h1 key={movi.imdbID}>{movi.title}</h1>
              <p>Gener:{movi.gener}</p>
              <p>Year{movi.year}</p>
              <p>Rating {movi.rated}</p>
              {/* poster, title, year, rating */}
            </div>
          );
        })
      ) : (
        <div>No movies!</div>
      )}
    </div>
  );
}
