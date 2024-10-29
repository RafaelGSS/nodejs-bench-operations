## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|139,710,708|69855369|
|Using parseInt(x, 10) - big number (10 len)|98,909,300|49456287|
|Using + - small number (2 len)|99,470,325|49736067|
|Using + - big number (10 len)|99,721,670|49860842|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:31:32 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":139710708.38132983,"samples":69855369},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":98909300.10216662,"samples":49456287},{"name":"Using + - small number (2 len)","opsSec":99470325.23160599,"samples":49736067},{"name":"Using + - big number (10 len)","opsSec":99721670.2384095,"samples":49860842}]}-->
