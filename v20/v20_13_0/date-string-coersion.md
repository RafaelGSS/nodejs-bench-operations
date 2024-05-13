## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,054,833|527417|
|Using brackets {}|1,080,373|540187|
|Using '' + |1,073,784|536893|
|Using date.toString()|1,190,555|595278|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 16:08:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1054833.0654179575,"samples":527417},{"name":"Using brackets {}","opsSec":1080373.4079552898,"samples":540187},{"name":"Using '' + ","opsSec":1073784.0843687998,"samples":536893},{"name":"Using date.toString()","opsSec":1190555.8833255013,"samples":595278}]}-->
