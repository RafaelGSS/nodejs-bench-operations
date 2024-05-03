## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,160,628|94|
|Using brackets {}|1,176,429|96|
|Using '' + |1,152,153|96|
|Using date.toString()|1,269,852|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:40:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1160627.671972728,"samples":4},{"name":"Using brackets {}","opsSec":1176428.6566399317,"samples":6},{"name":"Using '' + ","opsSec":1152152.7476630944,"samples":7},{"name":"Using date.toString()","opsSec":1269851.9360676233,"samples":7}]}-->
