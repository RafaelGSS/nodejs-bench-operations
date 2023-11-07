## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|846,782,439|100|
|Using optional chain (obj.field?.field2) (undefined)|847,585,988|94|
|Using and operator (obj.field && obj.field.field2) (Valid)|847,702,816|97|
|Using and operator (obj.field && obj.field.field2) (undefined)|845,704,390|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 17:26:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":846782438.8531611,"samples":6},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":847585987.6675495,"samples":8},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":847702815.719056,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":845704390.0894566,"samples":6}]}-->
