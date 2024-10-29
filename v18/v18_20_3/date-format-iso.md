## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,460,503|1253274|
|fromUnixToISOString(new Date())|1,971,584|1010689|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:19:07 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Date().toISOString()","opsSec":2460503.6358656283,"samples":1253274},{"name":"fromUnixToISOString(new Date())","opsSec":1971584.801710358,"samples":1010689}]}-->
