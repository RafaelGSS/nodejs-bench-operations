## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|579,930,670|89|
|Using parseInt(x, 10) - big number (10 len)|589,487,817|94|
|Using + - small number (2 len)|592,070,390|98|
|Using + - big number (10 len)|590,669,138|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:05:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":579930669.6306747,"samples":5},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":589487817.0513053,"samples":8},{"name":"Using + - small number (2 len)","opsSec":592070390.2545561,"samples":6},{"name":"Using + - big number (10 len)","opsSec":590669137.7957624,"samples":6}]}-->
