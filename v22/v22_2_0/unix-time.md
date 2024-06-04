## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,814,384|3407193|
|Date.now()|9,566,258|4783130|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Tue Jun 04 2024 16:45:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245220184326172},"benchmarks":[{"name":"new Date().getTime()","opsSec":6814384.364544781,"samples":3407193},{"name":"Date.now()","opsSec":9566258.775515547,"samples":4783130}]}-->
