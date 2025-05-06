## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|30,853,325|15440491|
|Object.create({})|1,312,280|659631|
|new Function with empty prototype|78,429,375|39223033|
|Empty class|77,754,742|38936427|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:04:38 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Object.create(null)","samples":15440491,"opsSec":30853325.202701602},{"name":"Object.create({})","samples":659631,"opsSec":1312280.105557986},{"name":"new Function with empty prototype","samples":39223033,"opsSec":78429375.28778626},{"name":"Empty class","samples":38936427,"opsSec":77754742.3692084}]}-->
