## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,186,706|94|
|Using brackets {}|1,218,290|97|
|Using '' + |1,211,039|98|
|Using date.toString()|1,354,385|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:44:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1186705.566558863,"samples":3},{"name":"Using brackets {}","opsSec":1218289.7190281125,"samples":5},{"name":"Using '' + ","opsSec":1211039.2103370784,"samples":4},{"name":"Using date.toString()","opsSec":1354385.0818145059,"samples":6}]}-->
