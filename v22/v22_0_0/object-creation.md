## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|36,019,333|18022923|
|Object.create({})|2,134,356|1067183|
|new Function with empty prototype|78,222,873|39111903|
|Empty class|81,075,302|40586639|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:55:08 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Object.create(null)","samples":18022923,"opsSec":36019333.393346496},{"name":"Object.create({})","samples":1067183,"opsSec":2134356.318559739},{"name":"new Function with empty prototype","samples":39111903,"opsSec":78222873.426903},{"name":"Empty class","samples":40586639,"opsSec":81075302.06476802}]}-->
