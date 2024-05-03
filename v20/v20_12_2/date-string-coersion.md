## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,161,844|98|
|Using brackets {}|1,198,585|97|
|Using '' + |1,204,707|93|
|Using date.toString()|1,333,385|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:42:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1161844.081378082,"samples":4},{"name":"Using brackets {}","opsSec":1198585.1617031486,"samples":6},{"name":"Using '' + ","opsSec":1204707.310471522,"samples":5},{"name":"Using date.toString()","opsSec":1333384.7209143338,"samples":4}]}-->
