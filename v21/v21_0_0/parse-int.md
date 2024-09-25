## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|14,604,202|7302102|
|Using parseInt(x, 10) - big number (10 len)|14,489,575|7244788|
|Using + - small number (2 len)|14,258,159|7129080|
|Using + - big number (10 len)|14,199,234|7099618|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:25:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":14604202.171179533,"samples":7302102},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":14489575.254619537,"samples":7244788},{"name":"Using + - small number (2 len)","opsSec":14258159.648107933,"samples":7129080},{"name":"Using + - big number (10 len)","opsSec":14199234.745088855,"samples":7099618}]}-->
