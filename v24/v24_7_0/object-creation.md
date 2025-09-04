## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|31,219,949|15610742|
|Object.create({})|1,968,538|985950|
|new Function with empty prototype|70,593,578|35324975|
|Empty class|77,347,952|38677606|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:26:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.7.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Object.create(null)","samples":15610742,"opsSec":31219949.10242233},{"name":"Object.create({})","samples":985950,"opsSec":1968538.2249093347},{"name":"new Function with empty prototype","samples":35324975,"opsSec":70593578.90943345},{"name":"Empty class","samples":38677606,"opsSec":77347952.27589528}]}-->
