## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,123,380|98|
|Using brackets {}|1,111,349|93|
|Using '' + |1,122,891|94|
|Using date.toString()|1,218,253|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:42:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using String()","opsSec":1123380.4297108627,"samples":6},{"name":"Using brackets {}","opsSec":1111348.9748848826,"samples":8},{"name":"Using '' + ","opsSec":1122890.6469466565,"samples":4},{"name":"Using date.toString()","opsSec":1218253.4945327495,"samples":4}]}-->
