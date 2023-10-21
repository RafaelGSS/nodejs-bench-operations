## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|158,380,282|98|
|Using parseInt(x, 10) - big number (10 len)|14,077,002|96|
|Using + - small number (2 len)|710,816,940|98|
|Using + - big number (10 len)|709,980,539|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:07:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":158380282.45844007,"samples":8},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":14077002.354949778,"samples":9},{"name":"Using + - small number (2 len)","opsSec":710816940.2885693,"samples":7},{"name":"Using + - big number (10 len)","opsSec":709980539.4072638,"samples":8}]}-->
