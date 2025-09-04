## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|30,447,633|15223946|
|Object.create({})|1,971,476|989682|
|new Function with empty prototype|72,855,176|36428110|
|Empty class|75,241,883|37624600|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:29:36 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.6.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Object.create(null)","samples":15223946,"opsSec":30447633.438696835},{"name":"Object.create({})","samples":989682,"opsSec":1971476.1986453154},{"name":"new Function with empty prototype","samples":36428110,"opsSec":72855176.27674465},{"name":"Empty class","samples":37624600,"opsSec":75241883.47925048}]}-->
