## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|144,983,447|81|
|Using parseInt(x, 10) - big number (10 len)|145,661,681|83|
|Using + - small number (2 len)|148,412,513|86|
|Using + - big number (10 len)|141,484,969|80|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 23:09:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":144983446.51719913,"samples":7},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":145661680.89538464,"samples":6},{"name":"Using + - small number (2 len)","opsSec":148412512.88194004,"samples":5},{"name":"Using + - big number (10 len)","opsSec":141484968.58771148,"samples":5}]}-->
