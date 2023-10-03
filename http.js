import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  vus: 1000,
  duration: '20s',
};

// Function to make the second API request
function apiRequest2() {
  let response = http.get('http://localhost:8080/list');

  check(response, {
    'Status is 200 for API 2': (r) => r.status === 200,
  });

  sleep(1);
}

export default function () {

  // Call the second API request function
  apiRequest2();
}
