## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,302,635|86|
|fromUnixToISOString(new Date())|1,112,302|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:42:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"new Date().toISOString()","hz":1302634.7982587786,"cycles":3,"stats":{"deviation":5.6886229780007535e-8,"mean":7.676748704523263e-7,"moe":1.2023031831961824e-8,"rme":1.5661619644886462,"sem":6.1341999142662365e-9,"variance":3.2360431385838162e-15}},{"name":"fromUnixToISOString(new Date())","hz":1112302.3775675257,"cycles":5,"stats":{"deviation":4.714963130854966e-8,"mean":8.990361075977219e-7,"moe":9.79578780910825e-9,"rme":1.089587807021809,"sem":4.997850923014414e-9,"variance":2.2230877325321662e-15}}]}-->
