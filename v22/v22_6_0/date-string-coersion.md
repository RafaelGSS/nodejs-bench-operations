## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|950,047|475024|
|Using brackets {}|963,895|481948|
|Using '' + |962,152|481077|
|Using date.toString()|1,068,248|534125|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:13:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using String()","opsSec":950047.5534774918,"samples":475024},{"name":"Using brackets {}","opsSec":963895.9248166009,"samples":481948},{"name":"Using '' + ","opsSec":962152.1103330198,"samples":481077},{"name":"Using date.toString()","opsSec":1068248.2630283833,"samples":534125}]}-->
