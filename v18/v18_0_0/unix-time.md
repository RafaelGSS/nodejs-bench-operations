## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|11,221,400|94|
|Date.now()|19,459,753|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:31:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Date().getTime()","opsSec":11221400.470779033,"samples":7},{"name":"Date.now()","opsSec":19459753.153565325,"samples":5}]}-->
