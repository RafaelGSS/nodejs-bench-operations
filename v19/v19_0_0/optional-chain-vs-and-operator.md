## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|714,134,782|96|
|Using optional chain (obj.field?.field2) (undefined)|717,307,743|98|
|Using and operator (obj.field && obj.field.field2) (Valid)|715,306,020|95|
|Using and operator (obj.field && obj.field.field2) (undefined)|713,809,300|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:05:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":714134782.4652164,"samples":7},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":717307742.5454259,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":715306019.6175987,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":713809300.3826032,"samples":6}]}-->
