## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|624,409,304|87|
|Using parseInt(x, 10) - big number (10 len)|635,623,033|91|
|Using + - small number (2 len)|632,197,890|92|
|Using + - big number (10 len)|627,208,633|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:15:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":624409304.0220356,"samples":6},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":635623032.5079448,"samples":6},{"name":"Using + - small number (2 len)","opsSec":632197890.055235,"samples":6},{"name":"Using + - big number (10 len)","opsSec":627208632.957935,"samples":8}]}-->
