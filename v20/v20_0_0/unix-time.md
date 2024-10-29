## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|10,762,569|5381758|
|Date.now()|20,631,938|10315972|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 20:13:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Date().getTime()","opsSec":10762569.690297412,"samples":5381758},{"name":"Date.now()","opsSec":20631938.429376625,"samples":10315972}]}-->
