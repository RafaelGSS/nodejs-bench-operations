## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|13,216,093|97|
|Date.now()|25,092,105|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Nov 08 2023 00:16:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Date().getTime()","opsSec":13216092.643605683,"samples":5},{"name":"Date.now()","opsSec":25092105.45921174,"samples":6}]}-->
