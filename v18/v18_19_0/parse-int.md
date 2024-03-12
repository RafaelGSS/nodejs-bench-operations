## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|237,664,346|96|
|Using parseInt(x, 10) - big number (10 len)|18,435,341|97|
|Using + - small number (2 len)|819,525,379|99|
|Using + - big number (10 len)|818,954,866|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:57:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":237664345.75315917,"samples":7},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":18435340.7094455,"samples":7},{"name":"Using + - small number (2 len)","opsSec":819525378.8895366,"samples":6},{"name":"Using + - big number (10 len)","opsSec":818954866.2775134,"samples":8}]}-->
