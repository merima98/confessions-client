import axios from "../httpClient";

function rate(postId, rate) {
  return axios.put(`/rate?postId=${postId}&rate=${rate}`);
}

function create(newPost) {
  return axios.post(`/`, newPost);
}

export default { rate, create };
