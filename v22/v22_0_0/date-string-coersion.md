## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|877,407|438704|
|Using brackets {}|883,507|441754|
|Using '' + |876,316|438159|
|Using date.toString()|947,048|473525|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:48:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using String()","opsSec":877407.3630018968,"samples":438704},{"name":"Using brackets {}","opsSec":883507.521139451,"samples":441754},{"name":"Using '' + ","opsSec":876316.3052043504,"samples":438159},{"name":"Using date.toString()","opsSec":947048.0471868685,"samples":473525}]}-->
