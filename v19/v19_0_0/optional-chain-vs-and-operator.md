## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|713,383,559|96|
|Using optional chain (obj.field?.field2) (undefined)|714,282,175|97|
|Using and operator (obj.field && obj.field.field2) (Valid)|715,579,524|96|
|Using and operator (obj.field && obj.field.field2) (undefined)|714,293,387|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:13:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":713383559.0485055,"samples":7},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":714282175.14262,"samples":8},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":715579524.4886951,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":714293387.1458824,"samples":6}]}-->
