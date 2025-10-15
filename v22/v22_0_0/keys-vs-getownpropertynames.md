## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|42,293,510|21155260|
|Using Object.getOwnPropertyNames()|41,205,761|20625471|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:42:27 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using Object.keys()","samples":21155260,"opsSec":42293510.56509498},{"name":"Using Object.getOwnPropertyNames()","samples":20625471,"opsSec":41205761.77767582}]}-->
