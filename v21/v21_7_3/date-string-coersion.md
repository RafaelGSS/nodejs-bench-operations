## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|883,149|441587|
|Using brackets {}|895,897|447949|
|Using '' + |897,804|448903|
|Using date.toString()|958,742|479372|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:12:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using String()","opsSec":883149.8087600771,"samples":441587},{"name":"Using brackets {}","opsSec":895897.4714200816,"samples":447949},{"name":"Using '' + ","opsSec":897804.0894723424,"samples":448903},{"name":"Using date.toString()","opsSec":958742.2205734577,"samples":479372}]}-->
