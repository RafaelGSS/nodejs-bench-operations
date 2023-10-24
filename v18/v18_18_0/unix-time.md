## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|7,439,294|92|
|Date.now()|15,176,333|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 18:01:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().getTime()","opsSec":7439293.519029794,"samples":7},{"name":"Date.now()","opsSec":15176332.853883455,"samples":8}]}-->
