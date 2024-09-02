## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|892,902|446452|
|Using brackets {}|908,727|454364|
|Using '' + |904,487|452244|
|Using date.toString()|1,006,664|503333|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:09:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using String()","opsSec":892902.5414522385,"samples":446452},{"name":"Using brackets {}","opsSec":908727.5054301226,"samples":454364},{"name":"Using '' + ","opsSec":904487.9689317073,"samples":452244},{"name":"Using date.toString()","opsSec":1006664.0830879223,"samples":503333}]}-->
