## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|94,561,364|47341704|
|Using backtick (`)|93,694,086|46848041|
|Using array.join|9,915,417|4957711|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:43:11 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using + sign","samples":47341704,"opsSec":94561364.45531577},{"name":"Using backtick (`)","samples":46848041,"opsSec":93694086.87811401},{"name":"Using array.join","samples":4957711,"opsSec":9915417.240599725}]}-->
