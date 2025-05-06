## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|30,807,526|15403888|
|Object.create({})|1,914,161|957134|
|new Function with empty prototype|77,352,405|38698626|
|Empty class|78,691,818|39347942|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:05:26 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Object.create(null)","samples":15403888,"opsSec":30807526.82872301},{"name":"Object.create({})","samples":957134,"opsSec":1914161.3046488788},{"name":"new Function with empty prototype","samples":38698626,"opsSec":77352405.55053878},{"name":"Empty class","samples":39347942,"opsSec":78691818.46589078}]}-->
