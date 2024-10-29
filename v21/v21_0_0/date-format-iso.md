## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,502,132|751272|
|fromUnixToISOString(new Date())|2,134,896|1067559|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:21:15 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1502132.2204943958,"samples":751272},{"name":"fromUnixToISOString(new Date())","opsSec":2134896.9228840475,"samples":1067559}]}-->
