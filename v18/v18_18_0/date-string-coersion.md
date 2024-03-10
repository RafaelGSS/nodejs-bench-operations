## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,079,067|93|
|Using brackets {}|1,107,570|96|
|Using '' + |1,098,491|94|
|Using date.toString()|1,206,418|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:46:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using String()","opsSec":1079067.4538546384,"samples":6},{"name":"Using brackets {}","opsSec":1107570.3887254847,"samples":3},{"name":"Using '' + ","opsSec":1098491.1617191192,"samples":9},{"name":"Using date.toString()","opsSec":1206417.6587869143,"samples":6}]}-->
