// ● setMovies(movies)
// ● setSearchQuery(value)
// ● setLoading(boolean)
// ● setError(message|null)
// ● selectSeat(movieId, seatNumber)
// ● loadSeatSelectionsFromStorage() (or auto-load)

import { create } from "zustand";

const myCallBack = (set) => {
  return {};
};

const UseStateAction = create(myCallBack);
export default UseStateAction;
