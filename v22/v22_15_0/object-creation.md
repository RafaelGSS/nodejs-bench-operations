## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|28,957,823|14478923|
|Object.create({})|2,050,304|1038308|
|new Function with empty prototype|99,848,100|49948809|
|Empty class|77,461,578|38752649|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:04:54 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Object.create(null)","samples":14478923,"opsSec":28957823.181235336},{"name":"Object.create({})","samples":1038308,"opsSec":2050304.4066440575},{"name":"new Function with empty prototype","samples":49948809,"opsSec":99848100.730797},{"name":"Empty class","samples":38752649,"opsSec":77461578.83982596}]}-->
