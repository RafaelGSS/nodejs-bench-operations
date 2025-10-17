## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|35,297,659|17656667|
|Object.create({})|2,102,941|1052972|
|new Function with empty prototype|100,244,722|50127165|
|Empty class|80,255,282|40140504|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:32:51 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Object.create(null)","samples":17656667,"opsSec":35297659.86235216},{"name":"Object.create({})","samples":1052972,"opsSec":2102941.8948274334},{"name":"new Function with empty prototype","samples":50127165,"opsSec":100244722.74626145},{"name":"Empty class","samples":40140504,"opsSec":80255282.32975976}]}-->
