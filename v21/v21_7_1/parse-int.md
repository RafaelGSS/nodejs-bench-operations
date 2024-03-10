## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|826,854,281|93|
|Using parseInt(x, 10) - big number (10 len)|830,055,717|91|
|Using + - small number (2 len)|838,741,522|90|
|Using + - big number (10 len)|833,121,103|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:00:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":826854280.7039752,"samples":7},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":830055717.4357983,"samples":7},{"name":"Using + - small number (2 len)","opsSec":838741522.3079258,"samples":6},{"name":"Using + - big number (10 len)","opsSec":833121102.6200039,"samples":9}]}-->
