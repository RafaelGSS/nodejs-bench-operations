## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|846,178,591|94|
|Using parseInt(x, 10) - big number (10 len)|846,667,323|98|
|Using + - small number (2 len)|844,034,949|99|
|Using + - big number (10 len)|847,806,512|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Wed Mar 13 2024 16:01:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":846178590.6939977,"samples":6},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":846667323.383189,"samples":6},{"name":"Using + - small number (2 len)","opsSec":844034949.1108434,"samples":6},{"name":"Using + - big number (10 len)","opsSec":847806511.581959,"samples":7}]}-->
