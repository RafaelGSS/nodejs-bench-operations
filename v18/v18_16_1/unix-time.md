## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|10,812,427|99|
|Date.now()|22,476,837|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Nov 08 2023 00:14:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Date().getTime()","opsSec":10812426.979461148,"samples":6},{"name":"Date.now()","opsSec":22476836.564173836,"samples":5}]}-->
