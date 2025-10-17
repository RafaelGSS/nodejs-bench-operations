## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|101,271,079|50635546|
|Using backtick (`)|101,140,007|50579531|
|Using array.join|10,789,277|5394643|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 17:14:20 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using + sign","samples":50635546,"opsSec":101271079.03730188},{"name":"Using backtick (`)","samples":50579531,"opsSec":101140007.62712309},{"name":"Using array.join","samples":5394643,"opsSec":10789277.433313718}]}-->
