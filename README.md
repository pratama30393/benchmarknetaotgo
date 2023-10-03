# benchmarknetaotgo
Benchmark .NET AOT And Go
Running on local using i7 12700H 16GBDDR4
-------------------------------------------------------------------------------------------------------------
result for go version go1.21.1 windows/amd64
C:\Project\BenchmarkResult\benchmarknetaotgo>k6 run benchmarkGo.js

          /\      |‾‾| /‾‾/   /‾‾/
     /\  /  \     |  |/  /   /  /
    /  \/    \    |     (   /   ‾‾\
   /          \   |  |\  \ |  (‾)  |
  / __________ \  |__| \__\ \_____/ .io

  execution: local
     script: benchmarkGo.js
     output: -

  scenarios: (100.00%) 1 scenario, 1000 max VUs, 50s max duration (incl. graceful stop):
           * default: 1000 looping VUs for 20s (gracefulStop: 30s)


     ✗ Status is 200 for API Go
      ↳  56% — ✓ 5576 / ✗ 4253

     checks.........................: 56.73% ✓ 5576       ✗ 4253
     data_received..................: 1.6 GB 69 MB/s
     data_sent......................: 826 kB 35 kB/s
     http_req_blocked...............: avg=92.92ms  min=0s     med=0s       max=2.05s   p(90)=505.7µs p(95)=524.1ms
     http_req_connecting............: avg=92.84ms  min=0s     med=0s       max=2.04s   p(90)=0s      p(95)=522.97ms
     http_req_duration..............: avg=1.11s    min=1.91ms med=449.64ms max=21.81s  p(90)=1.74s   p(95)=1.92s
       { expected_response:true }...: avg=1.58s    min=4.74ms med=1.03s    max=21.81s  p(90)=1.87s   p(95)=2.28s
     http_req_failed................: 43.26% ✓ 4253       ✗ 5576
     http_req_receiving.............: avg=26.31ms  min=0s     med=544.79µs max=1.06s   p(90)=79.7ms  p(95)=159.93ms
     http_req_sending...............: avg=139.44µs min=0s     med=0s       max=99.98ms p(90)=0s      p(95)=508.6µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s       max=0s      p(90)=0s      p(95)=0s
     http_req_waiting...............: avg=1.08s    min=1.91ms med=446.13ms max=21.55s  p(90)=1.69s   p(95)=1.89s
     http_reqs......................: 9829   419.567217/s
     iteration_duration.............: avg=2.21s    min=1s     med=1.47s    max=23.4s   p(90)=2.84s   p(95)=3.39s
     iterations.....................: 9829   419.567217/s
     vus............................: 255    min=255      max=1000
     vus_max........................: 1000   min=1000     max=1000


running (23.4s), 0000/1000 VUs, 9829 complete and 0 interrupted iterations
default ✓ [======================================] 1000 VUs  20s


-------------------------------------------------------------------------------------------------------------
C:\Project\BenchmarkResult\benchmarknetaotgo>k6 run benchmarkNetAOT.js

          /\      |‾‾| /‾‾/   /‾‾/
     /\  /  \     |  |/  /   /  /
    /  \/    \    |     (   /   ‾‾\
   /          \   |  |\  \ |  (‾)  |
  / __________ \  |__| \__\ \_____/ .io

  execution: local
     script: benchmarkNetAOT.js
     output: -

  scenarios: (100.00%) 1 scenario, 1000 max VUs, 50s max duration (incl. graceful stop):
           * default: 1000 looping VUs for 20s (gracefulStop: 30s)


     ✗ Status is 200 for API 1
      ↳  99% — ✓ 19092 / ✗ 8

     checks.........................: 99.95% ✓ 19092     ✗ 8
     data_received..................: 5.4 GB 258 MB/s
     data_sent......................: 1.6 MB 76 kB/s
     http_req_blocked...............: avg=37.72ms min=0s      med=0s      max=1.55s    p(90)=0s      p(95)=17.38ms
     http_req_connecting............: avg=37.65ms min=0s      med=0s      max=1.54s    p(90)=0s      p(95)=17.38ms
     http_req_duration..............: avg=32.81ms min=1.56ms  med=11.31ms max=903.45ms p(90)=61ms    p(95)=141.3ms
       { expected_response:true }...: avg=32.52ms min=1.56ms  med=11.29ms max=903.45ms p(90)=60.21ms p(95)=140.78ms
     http_req_failed................: 0.04%  ✓ 8         ✗ 19092
     http_req_receiving.............: avg=3.33ms  min=0s      med=1ms     max=160.6ms  p(90)=6.98ms  p(95)=12.1ms
     http_req_sending...............: avg=61.61µs min=0s      med=0s      max=29.95ms  p(90)=0s      p(95)=190.9µs
     http_req_tls_handshaking.......: avg=0s      min=0s      med=0s      max=0s       p(90)=0s      p(95)=0s
     http_req_waiting...............: avg=29.41ms min=502.6µs med=9.04ms  max=901.07ms p(90)=41.25ms p(95)=131.82ms
     http_reqs......................: 19100  909.43549/s
     iteration_duration.............: avg=1.07s   min=1s      med=1.01s   max=2.93s    p(90)=1.07s   p(95)=1.42s
     iterations.....................: 19100  909.43549/s
     vus............................: 112    min=112     max=1000
     vus_max........................: 1000   min=1000    max=1000


running (21.0s), 0000/1000 VUs, 19100 complete and 0 interrupted iterations
default ✓ [======================================] 1000 VUs  20s

