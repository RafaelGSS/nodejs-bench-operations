## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|715,835,678|96|
|Using parseInt(x, 10) - big number (10 len)|717,231,329|94|
|Using + - small number (2 len)|719,538,953|98|
|Using + - big number (10 len)|716,486,493|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:07:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":715835678.2776468,"samples":6},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":717231329.0276337,"samples":7},{"name":"Using + - small number (2 len)","opsSec":719538953.0762458,"samples":10},{"name":"Using + - big number (10 len)","opsSec":716486492.5528384,"samples":10}]}-->
