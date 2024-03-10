## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,034,399|92|
|Using brackets {}|1,068,228|96|
|Using '' + |1,056,210|94|
|Using date.toString()|1,186,044|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:46:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using String()","opsSec":1034398.8987885935,"samples":4},{"name":"Using brackets {}","opsSec":1068228.497586988,"samples":4},{"name":"Using '' + ","opsSec":1056209.8142862655,"samples":4},{"name":"Using date.toString()","opsSec":1186044.1789596693,"samples":5}]}-->
