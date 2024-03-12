## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|11,225,241|94|
|Date.now()|19,486,148|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:31:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Date().getTime()","opsSec":11225240.618303258,"samples":4},{"name":"Date.now()","opsSec":19486148.41598586,"samples":6}]}-->
