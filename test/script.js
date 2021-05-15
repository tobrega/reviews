import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  vus: 10,
  duration: '30s',
}

export default () => {
  const targetPercentiles = [0.05, 0.5, 0.95];
  const range = 0.05;
  const max = 1000000;

  targetPercentiles.forEach((percentile) => {
    const random = Math.floor(max * range * (Math.random() + percentile / range - 0.5));
    http.get(`http://localhost:3000/reviews?product_id=${random}`);
  sleep(1);
  });
};