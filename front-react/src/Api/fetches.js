export async function getData() {
  try {
    const res = await fetch("http://localhost:5000/api/movies", {
      headers: {
        
      },
      method: "GET",
    });
    const json = await res.json();
    // console.log(json);
    return json;
  } catch (error) {
    console.error(error);
  }
}

