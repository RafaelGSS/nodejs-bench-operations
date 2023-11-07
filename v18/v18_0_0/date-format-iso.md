## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,570,130|98|
|fromUnixToISOString(new Date())|2,118,306|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:01:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Date().toISOString()","opsSec":2570129.5224817046,"samples":5},{"name":"fromUnixToISOString(new Date())","opsSec":2118306.321508058,"samples":8}]}-->
