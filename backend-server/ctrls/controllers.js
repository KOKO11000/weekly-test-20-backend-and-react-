import { readJsonFiles } from "../services/fsFunc.js";
import { sortedDataArr } from "../services/service.js";

const PATH_DATA = "data/movies.json";

export async function gegMoviesData(_, res) {
  try {
    const readData = await readJsonFiles(PATH_DATA);
    const sortded = await sortedDataArr(readData)
    res.json(sortded);
  } catch (error) {
    res.status(500);
    console.error(error);
  }
}
