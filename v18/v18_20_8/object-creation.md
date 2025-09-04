## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|29,945,770|15048567|
|Object.create({})|1,280,928|644727|
|new Function with empty prototype|77,281,432|38687301|
|Empty class|77,449,505|38748819|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:27:38 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Object.create(null)","samples":15048567,"opsSec":29945770.229580645},{"name":"Object.create({})","samples":644727,"opsSec":1280928.6512686166},{"name":"new Function with empty prototype","samples":38687301,"opsSec":77281432.74119014},{"name":"Empty class","samples":38748819,"opsSec":77449505.92025279}]}-->
