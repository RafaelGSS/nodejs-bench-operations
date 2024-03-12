## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|823,470,837|97|
|Using parseInt(x, 10) - big number (10 len)|824,017,354|98|
|Using + - small number (2 len)|824,308,810|97|
|Using + - big number (10 len)|823,867,081|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:57:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":823470837.3872637,"samples":6},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":824017353.5479484,"samples":7},{"name":"Using + - small number (2 len)","opsSec":824308810.0278364,"samples":8},{"name":"Using + - big number (10 len)","opsSec":823867081.005629,"samples":8}]}-->
