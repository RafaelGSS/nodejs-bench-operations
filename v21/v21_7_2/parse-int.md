## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|141,102,138|70590428|
|Using parseInt(x, 10) - big number (10 len)|100,350,387|50179770|
|Using + - small number (2 len)|102,470,319|51240711|
|Using + - big number (10 len)|102,877,639|51455826|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:31:11 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.2`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":141102138.22133335,"samples":70590428},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":100350387.44256291,"samples":50179770},{"name":"Using + - small number (2 len)","opsSec":102470319.13598098,"samples":51240711},{"name":"Using + - big number (10 len)","opsSec":102877639.62356405,"samples":51455826}]}-->
