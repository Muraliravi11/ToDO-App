import axios from 'axios';

export function getTodoRequest() {
  return axios.request({
    method: 'get',
    url: 'https://my-json-server.typicode.com/Muraliravi11/todoDB/todos',
  });
}
