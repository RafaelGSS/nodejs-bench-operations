## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|11,340,206|92|
|Date.now()|20,801,498|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Nov 08 2023 00:13:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Date().getTime()","opsSec":11340206.428659873,"samples":6},{"name":"Date.now()","opsSec":20801497.69242483,"samples":7}]}-->
