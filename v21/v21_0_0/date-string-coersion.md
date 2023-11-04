## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,047,058|95|
|Using brackets {}|1,066,815|98|
|Using '' + |1,072,495|99|
|Using date.toString()|1,201,569|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sat Nov 04 2023 16:13:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606914520263672},"benchmarks":[{"name":"Using String()","opsSec":1047057.5992056653,"samples":5},{"name":"Using brackets {}","opsSec":1066814.9806055669,"samples":5},{"name":"Using '' + ","opsSec":1072495.2544594002,"samples":4},{"name":"Using date.toString()","opsSec":1201569.020866129,"samples":6}]}-->
