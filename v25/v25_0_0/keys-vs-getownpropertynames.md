## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|45,624,367|22812226|
|Using Object.getOwnPropertyNames()|47,774,866|23887441|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:44:04 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using Object.keys()","samples":22812226,"opsSec":45624367.68616852},{"name":"Using Object.getOwnPropertyNames()","samples":23887441,"opsSec":47774866.32984384}]}-->
