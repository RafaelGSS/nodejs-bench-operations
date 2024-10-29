## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|141,005,001|70784213|
|Using parseInt(x, 10) - big number (10 len)|97,356,466|48692810|
|Using + - small number (2 len)|103,400,299|51701531|
|Using + - big number (10 len)|101,799,486|50911695|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:30:10 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":141005001.59873182,"samples":70784213},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":97356466.02211088,"samples":48692810},{"name":"Using + - small number (2 len)","opsSec":103400299.35080194,"samples":51701531},{"name":"Using + - big number (10 len)","opsSec":101799486.86968608,"samples":50911695}]}-->
