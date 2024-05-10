## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,388,841|3194421|
|Date.now()|8,953,626|4476814|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:44:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Date().getTime()","opsSec":6388841.451641339,"samples":3194421},{"name":"Date.now()","opsSec":8953626.586821364,"samples":4476814}]}-->
