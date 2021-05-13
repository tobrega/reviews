import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  vus: 10,
  duration: '30s',
}

export default function () {
  http.get('http://localhost:3000/reviews/20100');
  sleep(1);
}
