## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|219,577,892|93|
|Using parseInt(x, 10) - big number (10 len)|19,532,654|99|
|Using + - small number (2 len)|824,444,283|96|
|Using + - big number (10 len)|823,453,163|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:00:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606483459472656},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":219577892.47164357,"samples":5},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":19532654.077238314,"samples":6},{"name":"Using + - small number (2 len)","opsSec":824444282.9343578,"samples":10},{"name":"Using + - big number (10 len)","opsSec":823453163.2129481,"samples":9}]}-->
