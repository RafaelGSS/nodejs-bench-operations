## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|85,105,086|42553250|
|using Array.includes (first item)|80,732,796|40367176|
|Using raw comparison|97,031,054|48515645|
|Using raw comparison (first item)|97,891,362|48946152|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:18:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"using Array.includes","opsSec":85105086.74492952,"samples":42553250},{"name":"using Array.includes (first item)","opsSec":80732796.2790157,"samples":40367176},{"name":"Using raw comparison","opsSec":97031054.79672317,"samples":48515645},{"name":"Using raw comparison (first item)","opsSec":97891362.87243733,"samples":48946152}]}-->
