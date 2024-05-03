## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|911,214,453|99|
|Using parseInt(x, 10) - big number (10 len)|912,458,376|99|
|Using + - small number (2 len)|912,265,244|96|
|Using + - big number (10 len)|911,032,284|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 23:08:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":911214452.7617743,"samples":6},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":912458375.6351717,"samples":9},{"name":"Using + - small number (2 len)","opsSec":912265243.6307575,"samples":7},{"name":"Using + - big number (10 len)","opsSec":911032283.8627278,"samples":7}]}-->
