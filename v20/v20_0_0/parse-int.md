## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|146,408,274|73206543|
|Using parseInt(x, 10) - big number (10 len)|101,965,889|50982983|
|Using + - small number (2 len)|97,286,707|48643362|
|Using + - big number (10 len)|100,610,095|50343311|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:29:23 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":146408274.73127577,"samples":73206543},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":101965889.52558285,"samples":50982983},{"name":"Using + - small number (2 len)","opsSec":97286707.46125972,"samples":48643362},{"name":"Using + - big number (10 len)","opsSec":100610095.5466849,"samples":50343311}]}-->
