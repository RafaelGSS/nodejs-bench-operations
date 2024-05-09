## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,066,566|533284|
|Using brackets {}|1,072,586|536294|
|Using '' + |1,072,022|536012|
|Using date.toString()|1,176,594|588298|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:15:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1066566.8801047292,"samples":533284},{"name":"Using brackets {}","opsSec":1072586.5305563917,"samples":536294},{"name":"Using '' + ","opsSec":1072022.2161553502,"samples":536012},{"name":"Using date.toString()","opsSec":1176594.9222383578,"samples":588298}]}-->
