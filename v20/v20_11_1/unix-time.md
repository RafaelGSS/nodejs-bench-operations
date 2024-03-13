## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|11,964,005|92|
|Date.now()|21,368,552|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Wed Mar 13 2024 16:23:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Date().getTime()","opsSec":11964005.42464168,"samples":4},{"name":"Date.now()","opsSec":21368552.060921557,"samples":5}]}-->
