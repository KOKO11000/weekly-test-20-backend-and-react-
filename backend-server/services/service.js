export async function sortedDataArr(dataArr) {
  try {
    const getData = dataArr.map((element) => {
      return {
        title: element.Title,
        imdbID: element.imdbID,
        year: element.Year,
        rated: element.Rated,
        runTime: element.Runtime,
        gener: element.Genre,
        plot: element.Plot,
        poster: element.Poster,
      };
    });
    return getData;
  } catch (error) {
    console.error(error);
  }
}
