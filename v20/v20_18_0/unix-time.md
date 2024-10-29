## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|10,996,025|5498017|
|Date.now()|19,679,418|9841293|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 20:13:24 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Date().getTime()","opsSec":10996025.577044407,"samples":5498017},{"name":"Date.now()","opsSec":19679418.4008142,"samples":9841293}]}-->
