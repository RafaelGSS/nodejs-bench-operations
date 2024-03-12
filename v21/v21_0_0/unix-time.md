## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|11,676,653|93|
|Date.now()|21,587,913|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:31:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Date().getTime()","opsSec":11676652.50871484,"samples":4},{"name":"Date.now()","opsSec":21587912.69038154,"samples":5}]}-->
