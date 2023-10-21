## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|157,868,069|96|
|Using parseInt(x, 10) - big number (10 len)|13,890,102|98|
|Using + - small number (2 len)|711,941,634|97|
|Using + - big number (10 len)|710,131,081|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:07:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":157868069.44599557,"samples":6},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":13890102.408264643,"samples":5},{"name":"Using + - small number (2 len)","opsSec":711941634.1934459,"samples":6},{"name":"Using + - big number (10 len)","opsSec":710131081.0532333,"samples":8}]}-->
