## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,013,749|506875|
|Using brackets {}|1,062,495|531248|
|Using '' + |1,062,947|531474|
|Using date.toString()|1,154,785|577393|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 16:07:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1013749.3111644895,"samples":506875},{"name":"Using brackets {}","opsSec":1062495.7005772786,"samples":531248},{"name":"Using '' + ","opsSec":1062947.6634496457,"samples":531474},{"name":"Using date.toString()","opsSec":1154785.6635560796,"samples":577393}]}-->
