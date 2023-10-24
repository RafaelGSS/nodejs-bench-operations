## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|165,209,015|84|
|Using parseInt(x, 10) - big number (10 len)|11,802,929|87|
|Using + - small number (2 len)|749,868,660|85|
|Using + - big number (10 len)|737,855,113|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:05:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":165209014.99866873,"samples":5},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":11802929.323599517,"samples":7},{"name":"Using + - small number (2 len)","opsSec":749868660.2795374,"samples":6},{"name":"Using + - big number (10 len)","opsSec":737855112.8249111,"samples":6}]}-->
