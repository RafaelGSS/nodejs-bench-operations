## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|712,126,728|95|
|Using optional chain (obj.field?.field2) (undefined)|715,326,884|96|
|Using and operator (obj.field && obj.field.field2) (Valid)|714,293,772|98|
|Using and operator (obj.field && obj.field.field2) (undefined)|713,163,258|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:05:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":712126727.7953262,"samples":10},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":715326883.6252136,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":714293771.5263095,"samples":12},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":713163257.7668428,"samples":9}]}-->
