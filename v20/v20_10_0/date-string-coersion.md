## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,072,232|95|
|Using brackets {}|1,112,158|95|
|Using '' + |1,104,963|98|
|Using date.toString()|1,210,937|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:42:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using String()","opsSec":1072232.1793343488,"samples":8},{"name":"Using brackets {}","opsSec":1112157.6318417431,"samples":5},{"name":"Using '' + ","opsSec":1104962.973017933,"samples":5},{"name":"Using date.toString()","opsSec":1210937.1668775934,"samples":5}]}-->
