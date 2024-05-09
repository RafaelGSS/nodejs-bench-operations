## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,007,662|503832|
|Using brackets {}|1,039,547|519774|
|Using '' + |1,030,821|515411|
|Using date.toString()|1,153,718|576860|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:14:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1007662.3495139263,"samples":503832},{"name":"Using brackets {}","opsSec":1039547.4532485767,"samples":519774},{"name":"Using '' + ","opsSec":1030821.9577280576,"samples":515411},{"name":"Using date.toString()","opsSec":1153718.4051562995,"samples":576860}]}-->
