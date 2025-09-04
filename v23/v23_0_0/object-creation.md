## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|29,936,969|14987005|
|Object.create({})|2,071,387|1035695|
|new Function with empty prototype|75,954,541|37977415|
|Empty class|72,977,829|36490200|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:26:01 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Object.create(null)","samples":14987005,"opsSec":29936969.287270553},{"name":"Object.create({})","samples":1035695,"opsSec":2071387.0379165357},{"name":"new Function with empty prototype","samples":37977415,"opsSec":75954541.98037681},{"name":"Empty class","samples":36490200,"opsSec":72977829.86678775}]}-->
