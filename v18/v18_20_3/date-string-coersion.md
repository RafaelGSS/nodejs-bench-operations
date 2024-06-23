## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,052,414|526208|
|Using brackets {}|1,061,966|530984|
|Using '' + |1,056,736|528369|
|Using date.toString()|1,141,853|570927|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:16:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1052414.6209338037,"samples":526208},{"name":"Using brackets {}","opsSec":1061966.8360814191,"samples":530984},{"name":"Using '' + ","opsSec":1056736.723245644,"samples":528369},{"name":"Using date.toString()","opsSec":1141853.6007294378,"samples":570927}]}-->
