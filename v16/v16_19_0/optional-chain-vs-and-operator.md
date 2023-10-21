## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|713,331,061|96|
|Using optional chain (obj.field?.field2) (undefined)|713,126,111|96|
|Using and operator (obj.field && obj.field.field2) (Valid)|712,785,653|96|
|Using and operator (obj.field && obj.field.field2) (undefined)|711,085,375|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:05:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":713331061.1362846,"samples":11},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":713126110.7174375,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":712785652.7067224,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":711085375.194108,"samples":7}]}-->
