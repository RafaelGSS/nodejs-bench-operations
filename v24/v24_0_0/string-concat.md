## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|81,886,710|40943359|
|Using backtick (`)|82,499,942|41249972|
|Using array.join|10,401,416|5201695|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:52:56 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using + sign","samples":40943359,"opsSec":81886710.63019605},{"name":"Using backtick (`)","samples":41249972,"opsSec":82499942.18500127},{"name":"Using array.join","samples":5201695,"opsSec":10401416.560038896}]}-->
