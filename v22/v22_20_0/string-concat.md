## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|98,892,905|49452831|
|Using backtick (`)|96,660,564|48330466|
|Using array.join|9,917,722|4966477|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:52:11 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.20.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using + sign","samples":49452831,"opsSec":98892905.21079944},{"name":"Using backtick (`)","samples":48330466,"opsSec":96660564.88317457},{"name":"Using array.join","samples":4966477,"opsSec":9917722.361996446}]}-->
