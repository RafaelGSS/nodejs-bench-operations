## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|868,752|434377|
|Using brackets {}|895,435|447719|
|Using '' + |1,010,711|505410|
|Using date.toString()|1,172,828|587682|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:09:40 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using String()","opsSec":868752.1912579378,"samples":434377},{"name":"Using brackets {}","opsSec":895435.8706534996,"samples":447719},{"name":"Using '' + ","opsSec":1010711.8376619807,"samples":505410},{"name":"Using date.toString()","opsSec":1172828.733656973,"samples":587682}]}-->
