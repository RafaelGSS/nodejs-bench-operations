## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|581,646,973|97|
|Using optional chain (obj.field?.field2) (undefined)|590,545,473|95|
|Using and operator (obj.field && obj.field.field2) (Valid)|593,120,995|97|
|Using and operator (obj.field && obj.field.field2) (undefined)|591,862,463|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:01:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":581646972.7922077,"samples":5},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":590545472.9775139,"samples":8},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":593120994.6961017,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":591862462.7620006,"samples":6}]}-->
