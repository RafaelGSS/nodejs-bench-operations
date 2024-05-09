## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,059,668|529835|
|Using brackets {}|1,075,411|537706|
|Using '' + |1,070,893|535447|
|Using date.toString()|1,179,559|589780|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:16:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1059668.8894669074,"samples":529835},{"name":"Using brackets {}","opsSec":1075411.1740841265,"samples":537706},{"name":"Using '' + ","opsSec":1070893.3296208044,"samples":535447},{"name":"Using date.toString()","opsSec":1179559.240364094,"samples":589780}]}-->
