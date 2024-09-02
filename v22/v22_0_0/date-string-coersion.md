## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|879,782|439892|
|Using brackets {}|891,960|445981|
|Using '' + |888,293|444147|
|Using date.toString()|951,528|475765|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:13:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using String()","opsSec":879782.6099431192,"samples":439892},{"name":"Using brackets {}","opsSec":891960.1197474392,"samples":445981},{"name":"Using '' + ","opsSec":888293.3124603652,"samples":444147},{"name":"Using date.toString()","opsSec":951528.6697629713,"samples":475765}]}-->
