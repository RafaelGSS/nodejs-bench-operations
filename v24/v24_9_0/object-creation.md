## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|36,792,862|18401246|
|Object.create({})|2,056,363|1028183|
|new Function with empty prototype|67,269,458|33638643|
|Empty class|77,857,243|38940124|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:56:26 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Object.create(null)","samples":18401246,"opsSec":36792862.277741775},{"name":"Object.create({})","samples":1028183,"opsSec":2056363.5118001509},{"name":"new Function with empty prototype","samples":33638643,"opsSec":67269458.52580594},{"name":"Empty class","samples":38940124,"opsSec":77857243.52025707}]}-->
