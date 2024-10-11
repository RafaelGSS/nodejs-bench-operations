## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|149,497,498|74761374|
|Using backtick (`)|94,071,366|47035691|
|Using array.join|9,962,952|4981479|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:37:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using + sign","opsSec":149497498.17155382,"samples":74761374},{"name":"Using backtick (`)","opsSec":94071366.57229587,"samples":47035691},{"name":"Using array.join","opsSec":9962952.261339499,"samples":4981479}]}-->
