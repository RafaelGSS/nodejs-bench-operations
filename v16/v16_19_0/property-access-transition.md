## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,461,668|96|
|Adding property in the object creation - small object|2,473,877|96|
|Adding property after the function creation - small class|225,585|91|
|Adding property in the function creation - small class|226,391|91|
|Adding property after the class creation - small class|193,300|87|
|Adding property in the class creation - small class|192,504|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:35:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":2461667.5201335754,"samples":6},{"name":"Adding property in the object creation - small object","opsSec":2473877.4969299105,"samples":6},{"name":"Adding property after the function creation - small class","opsSec":225585.48058935176,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":226391.35224006718,"samples":4},{"name":"Adding property after the class creation - small class","opsSec":193299.61142321926,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":192503.98558932907,"samples":3}]}-->
