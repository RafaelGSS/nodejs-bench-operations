## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|142,142,816|80|
|Using parseInt(x, 10) - big number (10 len)|140,220,725|78|
|Using + - small number (2 len)|143,722,853|82|
|Using + - big number (10 len)|145,534,655|83|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 23:10:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":142142815.70996103,"samples":5},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":140220724.9980938,"samples":5},{"name":"Using + - small number (2 len)","opsSec":143722852.82834992,"samples":5},{"name":"Using + - big number (10 len)","opsSec":145534655.1921107,"samples":6}]}-->
