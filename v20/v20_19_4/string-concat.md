## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|95,555,326|47780448|
|Using backtick (`)|96,719,802|48364794|
|Using array.join|10,648,894|5324520|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:34:21 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using + sign","samples":47780448,"opsSec":95555326.84444086},{"name":"Using backtick (`)","samples":48364794,"opsSec":96719802.66412488},{"name":"Using array.join","samples":5324520,"opsSec":10648894.195340678}]}-->
