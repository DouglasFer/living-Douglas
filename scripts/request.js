const baseUrl = "https://m2-api-living.herokuapp.com/news?page=";
const myHeader = {
  "Content-Type": "application/json",
};

async function getPostsApi(page) {
  const response = fetch(`${baseUrl}${page}`, {
    method: "GET",
    headers: myHeader,
  })
    .then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else {
        console.log(resp.json().then((response) => response.message));
      }
    })
    .then((resp) => resp);
  return response;
}
async function getPostId(id) {
  const response = fetch(`https://m2-api-living.herokuapp.com/news/${id}`, {
    method: "GET",
    headers: myHeader,
  })
    .then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else {
        console.log(resp.json().then((response) => response.message));
      }
    })
    .then((resp) => resp);

  return response;
}

export { getPostsApi, getPostId };
