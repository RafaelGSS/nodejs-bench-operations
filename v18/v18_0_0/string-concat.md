## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|848,126,819|99|
|Using backtick (`)|848,812,599|99|
|Using array.join|12,124,749|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:42:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using + sign","opsSec":848126819.3001086,"samples":6},{"name":"Using backtick (`)","opsSec":848812598.8244013,"samples":6},{"name":"Using array.join","opsSec":12124748.889825933,"samples":6}]}-->
