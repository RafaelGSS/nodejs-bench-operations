## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|819,120,567|98|
|Using backtick (`)|819,455,903|94|
|Using array.join|11,307,796|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:23:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Using + sign","opsSec":819120566.822824,"samples":6},{"name":"Using backtick (`)","opsSec":819455902.7428617,"samples":9},{"name":"Using array.join","opsSec":11307796.350091813,"samples":4}]}-->
