## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|918,478|459246|
|Using brackets {}|1,021,953|511947|
|Using '' + |998,554|499604|
|Using date.toString()|1,153,034|576543|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:15:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using String()","opsSec":918478.9925005082,"samples":459246},{"name":"Using brackets {}","opsSec":1021953.2759824978,"samples":511947},{"name":"Using '' + ","opsSec":998554.6177540743,"samples":499604},{"name":"Using date.toString()","opsSec":1153034.6000236,"samples":576543}]}-->
