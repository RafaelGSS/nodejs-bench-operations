## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|29,471,105|14756164|
|Object.create({})|2,092,202|1052776|
|new Function with empty prototype|96,636,869|48339379|
|Empty class|77,853,562|38928503|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:27:22 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Object.create(null)","samples":14756164,"opsSec":29471105.468053192},{"name":"Object.create({})","samples":1052776,"opsSec":2092202.8503519348},{"name":"new Function with empty prototype","samples":48339379,"opsSec":96636869.58923411},{"name":"Empty class","samples":38928503,"opsSec":77853562.53692898}]}-->
