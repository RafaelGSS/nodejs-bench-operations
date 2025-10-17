## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|95,895,300|47948002|
|Using backtick (`)|96,329,604|48186884|
|Using array.join|10,512,338|5256171|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 17:12:39 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using + sign","samples":47948002,"opsSec":95895300.32028624},{"name":"Using backtick (`)","samples":48186884,"opsSec":96329604.15170299},{"name":"Using array.join","samples":5256171,"opsSec":10512338.257607581}]}-->
