## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,050,143|93|
|Using brackets {}|1,050,974|96|
|Using '' + |1,050,403|97|
|Using date.toString()|1,216,120|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:46:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using String()","opsSec":1050143.2101354508,"samples":7},{"name":"Using brackets {}","opsSec":1050973.6540436838,"samples":6},{"name":"Using '' + ","opsSec":1050403.409917627,"samples":5},{"name":"Using date.toString()","opsSec":1216119.6228435673,"samples":7}]}-->
