// movies: array
// ● isLoading
// ● error
// ● searchQuery
// ● seatSelections (map of movieId → seatNumber)
import { create } from "zustand";

const myCallBack = (set) => {
  return {
    movies: [],
    fetchData: async () => {
      const res = await fetch("http://localhost:5000/api/movies", {
        headers: { "content-type": "application/json" },
      });

      const data = await res.json();
      set({ movies: data });
      
    },
  };
};

const UseglobalState = create(myCallBack);
export default UseglobalState;
