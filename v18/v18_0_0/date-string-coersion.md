## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,176,276|97|
|Using brackets {}|1,207,085|94|
|Using '' + |1,188,314|92|
|Using date.toString()|1,338,093|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:38:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1176276.1020611096,"samples":4},{"name":"Using brackets {}","opsSec":1207084.5198412158,"samples":4},{"name":"Using '' + ","opsSec":1188314.4164808537,"samples":4},{"name":"Using date.toString()","opsSec":1338093.3897024072,"samples":5}]}-->
