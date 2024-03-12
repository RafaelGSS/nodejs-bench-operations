## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|843,527,584|96|
|Using parseInt(x, 10) - big number (10 len)|847,799,123|94|
|Using + - small number (2 len)|839,965,047|94|
|Using + - big number (10 len)|844,478,215|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:56:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":843527584.0068868,"samples":6},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":847799123.0711502,"samples":8},{"name":"Using + - small number (2 len)","opsSec":839965046.5321611,"samples":6},{"name":"Using + - big number (10 len)","opsSec":844478215.3293875,"samples":7}]}-->
