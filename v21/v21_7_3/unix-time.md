## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,788,392|3394197|
|Date.now()|9,030,834|4515418|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:49:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Date().getTime()","opsSec":6788392.995316914,"samples":3394197},{"name":"Date.now()","opsSec":9030834.248025833,"samples":4515418}]}-->
