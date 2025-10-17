## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|89,595,749|44798533|
|Using backtick (`)|89,948,875|44974469|
|Using array.join|10,545,598|5272803|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 17:13:13 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using + sign","samples":44798533,"opsSec":89595749.83843488},{"name":"Using backtick (`)","samples":44974469,"opsSec":89948875.39558272},{"name":"Using array.join","samples":5272803,"opsSec":10545598.512625057}]}-->
