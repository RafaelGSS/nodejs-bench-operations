## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|13,653,714|6826858|
|Using optional chain (obj.field?.field2) (undefined)|14,004,708|7002355|
|Using and operator (obj.field && obj.field.field2) (Valid)|14,656,009|7328005|
|Using and operator (obj.field && obj.field.field2) (undefined)|15,204,684|7602343|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:17:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":13653714.93505458,"samples":6826858},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":14004708.319503315,"samples":7002355},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":14656009.501639418,"samples":7328005},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":15204684.449069446,"samples":7602343}]}-->
