## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,441,574|95|
|fromUnixToISOString(new Date())|2,260,092|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:39:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1441574.3560607403,"samples":4},{"name":"fromUnixToISOString(new Date())","opsSec":2260092.3512562416,"samples":6}]}-->
