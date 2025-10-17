## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|94,614,115|47364687|
|Using backtick (`)|95,395,474|47698266|
|Using array.join|10,346,564|5174111|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 17:12:55 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using + sign","samples":47364687,"opsSec":94614115.46299945},{"name":"Using backtick (`)","samples":47698266,"opsSec":95395474.4457703},{"name":"Using array.join","samples":5174111,"opsSec":10346564.19071285}]}-->
