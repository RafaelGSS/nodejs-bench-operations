## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|221,722,071|90|
|Using parseInt(x, 10) - big number (10 len)|16,884,405|97|
|Using + - small number (2 len)|896,942,988|96|
|Using + - big number (10 len)|897,295,308|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:00:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":221722071.45290834,"samples":5},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":16884404.8588995,"samples":6},{"name":"Using + - small number (2 len)","opsSec":896942988.4011568,"samples":6},{"name":"Using + - big number (10 len)","opsSec":897295307.63062,"samples":10}]}-->
