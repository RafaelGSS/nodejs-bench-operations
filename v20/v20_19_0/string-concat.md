## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|100,821,566|50464561|
|Using backtick (`)|100,314,873|50157443|
|Using array.join|10,483,282|5241644|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:03:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using + sign","samples":50464561,"opsSec":100821566.76243664},{"name":"Using backtick (`)","samples":50157443,"opsSec":100314873.36032596},{"name":"Using array.join","samples":5241644,"opsSec":10483282.255161325}]}-->
