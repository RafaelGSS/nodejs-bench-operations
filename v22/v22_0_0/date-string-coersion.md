## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,050,640|525321|
|Using brackets {}|1,045,845|522923|
|Using '' + |1,059,525|529763|
|Using date.toString()|1,166,922|583462|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 16:50:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1050640.7161169467,"samples":525321},{"name":"Using brackets {}","opsSec":1045845.5105443923,"samples":522923},{"name":"Using '' + ","opsSec":1059525.5465226856,"samples":529763},{"name":"Using date.toString()","opsSec":1166922.468996883,"samples":583462}]}-->
