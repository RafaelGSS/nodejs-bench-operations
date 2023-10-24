## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|661,274|95|
|Using brackets {}|673,249|97|
|Using '' + |667,374|93|
|Using date.toString()|718,623|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:14:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using String()","opsSec":661274.164746456,"samples":5},{"name":"Using brackets {}","opsSec":673249.192917981,"samples":4},{"name":"Using '' + ","opsSec":667373.980590718,"samples":4},{"name":"Using date.toString()","opsSec":718622.5747590695,"samples":5}]}-->
