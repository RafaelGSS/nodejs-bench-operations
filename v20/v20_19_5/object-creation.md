## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|34,589,144|17301832|
|Object.create({})|1,919,201|987209|
|new Function with empty prototype|113,277,690|56640045|
|Empty class|81,563,428|40783726|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:28:29 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Object.create(null)","samples":17301832,"opsSec":34589144.722254805},{"name":"Object.create({})","samples":987209,"opsSec":1919201.5429182162},{"name":"new Function with empty prototype","samples":56640045,"opsSec":113277690.55195872},{"name":"Empty class","samples":40783726,"opsSec":81563428.47607328}]}-->
