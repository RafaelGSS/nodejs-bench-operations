## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|10,922,170|5473214|
|Date.now()|20,048,905|10024578|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:54:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"new Date().getTime()","opsSec":10922170.71078067,"samples":5473214},{"name":"Date.now()","opsSec":20048905.6292665,"samples":10024578}]}-->
