## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|8,227,304|95|
|Date.now()|15,522,859|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:17:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().getTime()","opsSec":8227304.206549198,"samples":4},{"name":"Date.now()","opsSec":15522859.089294666,"samples":4}]}-->
