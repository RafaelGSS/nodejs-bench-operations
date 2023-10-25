## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|687,464|95|
|Using brackets {}|692,322|93|
|Using '' + |696,055|96|
|Using date.toString()|761,767|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:51:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using String()","opsSec":687464.2952055156,"samples":5},{"name":"Using brackets {}","opsSec":692322.2634516906,"samples":6},{"name":"Using '' + ","opsSec":696054.8297882231,"samples":5},{"name":"Using date.toString()","opsSec":761767.3345935626,"samples":8}]}-->
