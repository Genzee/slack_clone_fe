import axios from 'axios';

const fetcher = (url: string) =>
  axios
    .get(url, {
      //서로다른 origin에서 쿠키를 주고 받을수 있음
      //개발 서버 한정
      withCredentials: true,
    })
    .then((response) => response.data);

export default fetcher;
