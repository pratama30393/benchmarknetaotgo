import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  vus: 1000,
  duration: '20s',
};

// Function to make the first API request
function apiRequest1() {
  let response = http.get('http://localhost:5000/list');

  check(response, {
    'Status is 200 for API 1': (r) => r.status === 200,
  });

  sleep(1);
}

export default function () {
  // Call the first API request function
  apiRequest1();

}
