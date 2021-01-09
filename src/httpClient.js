import axios from "axios";

const { REACT_APP_HOST } = process.env;
const { REACT_APP_PORT } = process.env;

const instance = axios.create({
  baseURL: `http://${REACT_APP_HOST}:${REACT_APP_PORT}`,
});

export default instance;
