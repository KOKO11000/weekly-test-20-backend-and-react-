import useGlobalState from "../Store/GlobalStore";
import { useSearch } from "../Hooks/customHooks";

export default function SearchBar(props) {
  const movies = useGlobalState((state) => state.movies);
  // const [filterData, setFilterData] = useState([]);
  const { setSearch } = useSearch(props.setFilterData, props.originalMovies);

  if (!movies) return <>Loading...</>;
  return (
    <div>
      <label htmlFor="search">Search:</label>
      <input
        id="search"
        type="text"
        className=""
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
    </div>
  );
}
