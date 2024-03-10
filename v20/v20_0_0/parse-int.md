## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|823,674,426|94|
|Using parseInt(x, 10) - big number (10 len)|825,517,193|94|
|Using + - small number (2 len)|827,250,516|95|
|Using + - big number (10 len)|826,159,454|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:00:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":823674426.2257408,"samples":6},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":825517193.3030456,"samples":7},{"name":"Using + - small number (2 len)","opsSec":827250515.8084037,"samples":7},{"name":"Using + - big number (10 len)","opsSec":826159453.5299639,"samples":6}]}-->
