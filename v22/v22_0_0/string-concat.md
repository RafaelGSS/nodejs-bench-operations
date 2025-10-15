## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|93,135,355|46605096|
|Using backtick (`)|97,942,334|48971183|
|Using array.join|10,618,807|5318299|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:54:56 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using + sign","samples":46605096,"opsSec":93135355.1343596},{"name":"Using backtick (`)","samples":48971183,"opsSec":97942334.6584529},{"name":"Using array.join","samples":5318299,"opsSec":10618807.250332791}]}-->
