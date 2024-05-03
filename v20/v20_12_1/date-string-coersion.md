## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,198,703|95|
|Using brackets {}|1,217,609|97|
|Using '' + |1,213,203|96|
|Using date.toString()|1,342,541|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:40:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1198703.0123339342,"samples":4},{"name":"Using brackets {}","opsSec":1217608.6703221225,"samples":8},{"name":"Using '' + ","opsSec":1213202.6427552137,"samples":4},{"name":"Using date.toString()","opsSec":1342541.3067003014,"samples":7}]}-->
