## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,079,823|95|
|Using brackets {}|1,107,705|95|
|Using '' + |1,082,998|98|
|Using date.toString()|1,215,877|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:42:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using String()","opsSec":1079822.5885784945,"samples":6},{"name":"Using brackets {}","opsSec":1107704.971413636,"samples":6},{"name":"Using '' + ","opsSec":1082998.281076222,"samples":6},{"name":"Using date.toString()","opsSec":1215876.7367022478,"samples":5}]}-->
