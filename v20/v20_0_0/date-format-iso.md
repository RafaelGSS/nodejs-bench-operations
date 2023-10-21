## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,082,514|95|
|fromUnixToISOString(new Date())|1,693,677|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:37:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1082513.821679732,"samples":5},{"name":"fromUnixToISOString(new Date())","opsSec":1693676.7084238026,"samples":7}]}-->
