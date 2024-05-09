## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,009,307|504654|
|Using brackets {}|1,049,506|524754|
|Using '' + |1,046,283|523142|
|Using date.toString()|1,166,749|583375|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:15:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1009307.9152181868,"samples":504654},{"name":"Using brackets {}","opsSec":1049506.301898513,"samples":524754},{"name":"Using '' + ","opsSec":1046283.4308222575,"samples":523142},{"name":"Using date.toString()","opsSec":1166749.6336407023,"samples":583375}]}-->
