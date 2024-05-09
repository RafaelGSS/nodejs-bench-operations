## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,034,081|517041|
|Using brackets {}|1,051,916|525959|
|Using '' + |1,060,874|530438|
|Using date.toString()|1,153,588|576795|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:13:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1034081.2707222941,"samples":517041},{"name":"Using brackets {}","opsSec":1051916.4154682367,"samples":525959},{"name":"Using '' + ","opsSec":1060874.4813951524,"samples":530438},{"name":"Using date.toString()","opsSec":1153588.6495684935,"samples":576795}]}-->
