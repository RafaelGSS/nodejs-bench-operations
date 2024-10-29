## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,435,653|717828|
|fromUnixToISOString(new Date())|2,096,115|1048144|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:22:53 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1435653.384239534,"samples":717828},{"name":"fromUnixToISOString(new Date())","opsSec":2096115.9843378612,"samples":1048144}]}-->
