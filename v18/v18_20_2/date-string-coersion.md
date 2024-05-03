## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,165,893|93|
|Using brackets {}|1,181,995|97|
|Using '' + |1,167,069|95|
|Using date.toString()|1,311,457|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:39:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1165893.2212676618,"samples":6},{"name":"Using brackets {}","opsSec":1181994.8908609396,"samples":5},{"name":"Using '' + ","opsSec":1167068.6999717418,"samples":6},{"name":"Using date.toString()","opsSec":1311456.6936082502,"samples":5}]}-->
