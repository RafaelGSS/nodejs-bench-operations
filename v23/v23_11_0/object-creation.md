## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|27,937,996|13969305|
|Object.create({})|2,106,039|1053024|
|new Function with empty prototype|73,679,680|36883649|
|Empty class|74,788,352|37397368|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:29:01 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Object.create(null)","samples":13969305,"opsSec":27937996.4257225},{"name":"Object.create({})","samples":1053024,"opsSec":2106039.205180279},{"name":"new Function with empty prototype","samples":36883649,"opsSec":73679680.33453658},{"name":"Empty class","samples":37397368,"opsSec":74788352.51495942}]}-->
