## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|714,046,027|95|
|Using optional chain (obj.field?.field2) (undefined)|715,825,250|97|
|Using and operator (obj.field && obj.field.field2) (Valid)|708,027,935|97|
|Using and operator (obj.field && obj.field.field2) (undefined)|715,094,933|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:05:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":714046027.1770734,"samples":6},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":715825249.6935072,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":708027935.410453,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":715094932.5273639,"samples":9}]}-->
