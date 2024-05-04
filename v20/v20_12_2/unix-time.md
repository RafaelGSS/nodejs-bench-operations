## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|13,025,256|93|
|Date.now()|23,662,881|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 02:04:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Date().getTime()","opsSec":13025255.835432867,"samples":5},{"name":"Date.now()","opsSec":23662880.53974879,"samples":9}]}-->
