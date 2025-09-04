## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|29,268,622|14669960|
|Object.create({})|1,957,873|978938|
|new Function with empty prototype|70,703,083|35389926|
|Empty class|75,359,685|37690888|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:28:45 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Object.create(null)","samples":14669960,"opsSec":29268622.221640527},{"name":"Object.create({})","samples":978938,"opsSec":1957873.4625959925},{"name":"new Function with empty prototype","samples":35389926,"opsSec":70703083.01667899},{"name":"Empty class","samples":37690888,"opsSec":75359685.96597217}]}-->
