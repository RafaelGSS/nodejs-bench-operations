## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|141,987,453|71020690|
|Using parseInt(x, 10) - big number (10 len)|102,335,399|51167811|
|Using + - small number (2 len)|101,350,815|50815311|
|Using + - big number (10 len)|101,833,022|50916512|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:30:31 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":141987453.4491549,"samples":71020690},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":102335399.11350074,"samples":51167811},{"name":"Using + - small number (2 len)","opsSec":101350815.10208574,"samples":50815311},{"name":"Using + - big number (10 len)","opsSec":101833022.77800372,"samples":50916512}]}-->
