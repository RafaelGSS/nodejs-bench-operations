## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,442,201|3221101|
|Date.now()|9,207,012|4603507|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 02:02:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Date().getTime()","opsSec":6442201.306306881,"samples":3221101},{"name":"Date.now()","opsSec":9207012.737735737,"samples":4603507}]}-->
