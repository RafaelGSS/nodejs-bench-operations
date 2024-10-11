## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,013,482|507775|
|Using brackets {}|1,004,786|502684|
|Using '' + |1,028,296|514149|
|Using date.toString()|1,157,766|580571|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:09:14 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using String()","opsSec":1013482.1963287591,"samples":507775},{"name":"Using brackets {}","opsSec":1004786.7449350695,"samples":502684},{"name":"Using '' + ","opsSec":1028296.4390460056,"samples":514149},{"name":"Using date.toString()","opsSec":1157766.2753999582,"samples":580571}]}-->
