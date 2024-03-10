## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|819,547,702|96|
|Using parseInt(x, 10) - big number (10 len)|820,731,790|97|
|Using + - small number (2 len)|821,306,892|95|
|Using + - big number (10 len)|820,728,941|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:00:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":819547701.739043,"samples":7},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":820731789.9722685,"samples":6},{"name":"Using + - small number (2 len)","opsSec":821306892.1167004,"samples":6},{"name":"Using + - big number (10 len)","opsSec":820728941.1855074,"samples":7}]}-->
