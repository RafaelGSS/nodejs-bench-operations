## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|96,828,460|48414239|
|Using backtick (`)|92,283,320|46141665|
|Using array.join|10,326,778|5163391|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:32:44 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using + sign","samples":48414239,"opsSec":96828460.18356334},{"name":"Using backtick (`)","samples":46141665,"opsSec":92283320.40253468},{"name":"Using array.join","samples":5163391,"opsSec":10326778.530202413}]}-->
