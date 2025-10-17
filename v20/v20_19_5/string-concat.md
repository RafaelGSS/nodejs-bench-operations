## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|100,144,041|50072033|
|Using backtick (`)|97,570,710|48815233|
|Using array.join|10,991,838|5497655|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 17:14:51 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using + sign","samples":50072033,"opsSec":100144041.96542992},{"name":"Using backtick (`)","samples":48815233,"opsSec":97570710.57458138},{"name":"Using array.join","samples":5497655,"opsSec":10991838.755337387}]}-->
