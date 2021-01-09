import axios from "../httpClient";

function confessions(page, sort) {
  return axios.get(`/?page=${page}&sort=${sort}`);
}

export default { confessions };
