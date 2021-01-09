import axios from "../httpClient";

function rate(postId, rate) {
  return axios.put(`/rate?postId=${postId}&rate=${rate}`);
}

export default { rate };
