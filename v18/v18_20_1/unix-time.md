## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|12,584,193|95|
|Date.now()|21,618,318|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 02:03:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Date().getTime()","opsSec":12584193.181992536,"samples":4},{"name":"Date.now()","opsSec":21618318.45171359,"samples":6}]}-->
