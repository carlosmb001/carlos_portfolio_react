import axios from 'axios';

const fetchData = async (githubUser) =>
  axios.get(`https://api.github.com/users/${githubUser}/repos`);

export default { fetchData };
