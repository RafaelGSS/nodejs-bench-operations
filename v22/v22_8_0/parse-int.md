## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|129,816,063|64923183|
|Using parseInt(x, 10) - big number (10 len)|99,484,061|49921351|
|Using + - small number (2 len)|96,293,163|48146590|
|Using + - big number (10 len)|97,553,627|48777667|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:17:24 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":129816063.03640541,"samples":64923183},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":99484061.56013945,"samples":49921351},{"name":"Using + - small number (2 len)","opsSec":96293163.82274848,"samples":48146590},{"name":"Using + - big number (10 len)","opsSec":97553627.59194615,"samples":48777667}]}-->
