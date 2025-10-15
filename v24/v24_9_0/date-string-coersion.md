## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,109,727|554888|
|Using brackets {}|1,115,874|558044|
|Using '' + |1,118,676|559917|
|Using date.toString()|1,262,021|631012|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:26:29 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using String()","samples":554888,"opsSec":1109727.8489086358},{"name":"Using brackets {}","samples":558044,"opsSec":1115874.6648498247},{"name":"Using '' + ","samples":559917,"opsSec":1118676.4338985535},{"name":"Using date.toString()","samples":631012,"opsSec":1262021.4633368587}]}-->
