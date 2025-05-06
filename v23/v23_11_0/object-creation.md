## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|30,571,211|15291622|
|Object.create({})|2,110,373|1055187|
|new Function with empty prototype|96,223,902|48119122|
|Empty class|76,543,594|38274141|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:06:55 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Object.create(null)","samples":15291622,"opsSec":30571211.96582176},{"name":"Object.create({})","samples":1055187,"opsSec":2110373.848053083},{"name":"new Function with empty prototype","samples":48119122,"opsSec":96223902.59710911},{"name":"Empty class","samples":38274141,"opsSec":76543594.164119}]}-->
