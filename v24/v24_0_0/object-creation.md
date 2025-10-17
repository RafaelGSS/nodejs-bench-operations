## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|34,967,108|17490174|
|Object.create({})|2,072,196|1037959|
|new Function with empty prototype|71,420,515|35713170|
|Empty class|77,911,893|38967065|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:32:20 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Object.create(null)","samples":17490174,"opsSec":34967108.963007085},{"name":"Object.create({})","samples":1037959,"opsSec":2072196.6166951554},{"name":"new Function with empty prototype","samples":35713170,"opsSec":71420515.3712894},{"name":"Empty class","samples":38967065,"opsSec":77911893.010792}]}-->
