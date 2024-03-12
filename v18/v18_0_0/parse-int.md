## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|240,495,217|96|
|Using parseInt(x, 10) - big number (10 len)|18,429,507|96|
|Using + - small number (2 len)|822,407,470|99|
|Using + - big number (10 len)|817,337,410|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:57:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":240495217.03042325,"samples":5},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":18429507.330844767,"samples":7},{"name":"Using + - small number (2 len)","opsSec":822407470.4643235,"samples":8},{"name":"Using + - big number (10 len)","opsSec":817337410.2447379,"samples":7}]}-->
