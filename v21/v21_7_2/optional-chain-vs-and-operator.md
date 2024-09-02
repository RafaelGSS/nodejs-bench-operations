## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|14,392,633|7196317|
|Using optional chain (obj.field?.field2) (undefined)|14,844,247|7422124|
|Using and operator (obj.field && obj.field.field2) (Valid)|14,120,124|7060063|
|Using and operator (obj.field && obj.field.field2) (undefined)|14,739,167|7369584|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:36:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":14392633.395494115,"samples":7196317},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":14844247.732783793,"samples":7422124},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":14120124.559823243,"samples":7060063},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":14739167.11582973,"samples":7369584}]}-->
