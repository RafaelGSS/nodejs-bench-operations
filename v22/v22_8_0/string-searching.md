## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|127,904,676|63952376|
|Using indexof|14,268,643|7134325|
|Using RegExp.test|12,166,186|6083597|
|Using RegExp.text with cached regex pattern|13,110,389|6555198|
|Using new RegExp.test|4,613,751|2306910|
|Using new RegExp.test with cached regex pattern|5,212,994|2606727|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:49:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using includes","opsSec":127904676.79205005,"samples":63952376},{"name":"Using indexof","opsSec":14268643.607647665,"samples":7134325},{"name":"Using RegExp.test","opsSec":12166186.712737305,"samples":6083597},{"name":"Using RegExp.text with cached regex pattern","opsSec":13110389.916779079,"samples":6555198},{"name":"Using new RegExp.test","opsSec":4613751.73492933,"samples":2306910},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5212994.99579062,"samples":2606727}]}-->
