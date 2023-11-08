## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|11,592,512|92|
|Date.now()|22,068,931|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Nov 08 2023 00:18:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Date().getTime()","opsSec":11592512.400745954,"samples":7},{"name":"Date.now()","opsSec":22068930.68152934,"samples":5}]}-->
