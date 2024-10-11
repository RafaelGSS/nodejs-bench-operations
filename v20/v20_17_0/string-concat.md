## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|143,823,046|71911562|
|Using backtick (`)|95,945,686|47973264|
|Using array.join|10,133,627|5067620|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:59:06 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using + sign","opsSec":143823046.04790905,"samples":71911562},{"name":"Using backtick (`)","opsSec":95945686.17254952,"samples":47973264},{"name":"Using array.join","opsSec":10133627.010321513,"samples":5067620}]}-->
