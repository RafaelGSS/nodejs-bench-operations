## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|592,946,862|93|
|Using optional chain (obj.field?.field2) (undefined)|598,116,576|93|
|Using and operator (obj.field && obj.field.field2) (Valid)|594,167,824|92|
|Using and operator (obj.field && obj.field.field2) (undefined)|596,335,165|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:13:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":592946861.974609,"samples":9},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":598116576.1638625,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":594167824.2057695,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":596335164.816092,"samples":6}]}-->
