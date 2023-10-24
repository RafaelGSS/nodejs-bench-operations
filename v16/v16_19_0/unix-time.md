## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|5,254,483|85|
|Date.now()|11,433,684|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 18:01:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Date().getTime()","opsSec":5254483.317952951,"samples":4},{"name":"Date.now()","opsSec":11433683.679102134,"samples":4}]}-->
