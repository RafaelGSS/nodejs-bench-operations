## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|128,942,802|64471424|
|Using parseInt(x, 10) - big number (10 len)|17,116,017|8561862|
|Using + - small number (2 len)|102,966,605|51483311|
|Using + - big number (10 len)|105,692,256|52846140|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:16:37 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":128942802.61213347,"samples":64471424},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":17116017.68419787,"samples":8561862},{"name":"Using + - small number (2 len)","opsSec":102966605.7312763,"samples":51483311},{"name":"Using + - big number (10 len)","opsSec":105692256.95908798,"samples":52846140}]}-->
