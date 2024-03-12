## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,095,380|95|
|Using brackets {}|1,122,078|97|
|Using '' + |1,093,202|97|
|Using date.toString()|1,221,604|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:42:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606494903564453},"benchmarks":[{"name":"Using String()","opsSec":1095379.6937391257,"samples":4},{"name":"Using brackets {}","opsSec":1122078.3121085716,"samples":4},{"name":"Using '' + ","opsSec":1093201.757754235,"samples":6},{"name":"Using date.toString()","opsSec":1221603.5380818543,"samples":5}]}-->
