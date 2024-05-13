## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,024,639|512320|
|Using brackets {}|1,044,663|522332|
|Using '' + |1,045,199|522600|
|Using date.toString()|1,149,881|574941|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 16:09:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1024639.6130396968,"samples":512320},{"name":"Using brackets {}","opsSec":1044663.6368599933,"samples":522332},{"name":"Using '' + ","opsSec":1045199.4492791216,"samples":522600},{"name":"Using date.toString()","opsSec":1149881.796030031,"samples":574941}]}-->
