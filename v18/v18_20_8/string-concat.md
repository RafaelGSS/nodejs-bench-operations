## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|106,233,012|53198708|
|Using backtick (`)|106,599,886|53304705|
|Using array.join|10,625,581|5313088|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:03:22 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using + sign","samples":53198708,"opsSec":106233012.55183312},{"name":"Using backtick (`)","samples":53304705,"opsSec":106599886.57933277},{"name":"Using array.join","samples":5313088,"opsSec":10625581.34996533}]}-->
