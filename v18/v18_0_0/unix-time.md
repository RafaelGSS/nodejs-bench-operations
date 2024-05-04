## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|12,547,081|91|
|Date.now()|21,453,451|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 02:02:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Date().getTime()","opsSec":12547080.907604808,"samples":5},{"name":"Date.now()","opsSec":21453450.99359228,"samples":6}]}-->
