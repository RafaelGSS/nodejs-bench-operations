## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,163,676|98|
|Using brackets {}|1,179,507|98|
|Using '' + |1,178,742|98|
|Using date.toString()|1,333,931|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:43:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1163675.5720150396,"samples":4},{"name":"Using brackets {}","opsSec":1179507.1067694337,"samples":6},{"name":"Using '' + ","opsSec":1178742.01444493,"samples":5},{"name":"Using date.toString()","opsSec":1333931.4833132026,"samples":5}]}-->
