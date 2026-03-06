import { useEffect, useState } from "react";

export function useSearch(setData, originalData) {
  const [search, setSearch] = useState("");
  useEffect(() => {
    console.log(originalData)
    setData(
      originalData?.filter(
        (d) =>
          d.title.toLowerCase().includes(search) ||
          d.gener.toLowerCase().includes(search),
      ),
    );
  }, [search, originalData, setData]);

  return { setSearch };
}
