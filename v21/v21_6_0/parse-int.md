## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|819,072,970|99|
|Using parseInt(x, 10) - big number (10 len)|819,998,348|97|
|Using + - small number (2 len)|820,723,925|99|
|Using + - big number (10 len)|819,713,885|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:57:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":819072970.3212365,"samples":9},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":819998347.638094,"samples":6},{"name":"Using + - small number (2 len)","opsSec":820723925.3725563,"samples":6},{"name":"Using + - big number (10 len)","opsSec":819713884.559093,"samples":10}]}-->
