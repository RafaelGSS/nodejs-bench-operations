## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|37,413,007|18744815|
|Object.create({})|2,065,638|1032820|
|new Function with empty prototype|84,469,842|42236475|
|Empty class|83,974,219|41989203|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:57:41 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Object.create(null)","samples":18744815,"opsSec":37413007.86059743},{"name":"Object.create({})","samples":1032820,"opsSec":2065638.3350955017},{"name":"new Function with empty prototype","samples":42236475,"opsSec":84469842.69236673},{"name":"Empty class","samples":41989203,"opsSec":83974219.38131852}]}-->
