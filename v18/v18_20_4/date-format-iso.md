## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,675,085|1337563|
|fromUnixToISOString(new Date())|2,041,101|1021154|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:12:47 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"new Date().toISOString()","opsSec":2675085.1300493833,"samples":1337563},{"name":"fromUnixToISOString(new Date())","opsSec":2041101.0194053869,"samples":1021154}]}-->
