## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,072,743|98|
|Using brackets {}|1,099,115|94|
|Using '' + |1,091,622|94|
|Using date.toString()|1,193,952|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:27:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using String()","opsSec":1072742.718996481,"samples":4},{"name":"Using brackets {}","opsSec":1099115.0918418572,"samples":5},{"name":"Using '' + ","opsSec":1091621.569829458,"samples":5},{"name":"Using date.toString()","opsSec":1193952.4669009373,"samples":5}]}-->
