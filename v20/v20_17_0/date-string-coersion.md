## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|955,789|477895|
|Using brackets {}|959,922|479962|
|Using '' + |962,991|481496|
|Using date.toString()|1,063,518|531760|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:11:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using String()","opsSec":955789.837516262,"samples":477895},{"name":"Using brackets {}","opsSec":959922.8404121143,"samples":479962},{"name":"Using '' + ","opsSec":962991.8478476044,"samples":481496},{"name":"Using date.toString()","opsSec":1063518.2217978693,"samples":531760}]}-->
