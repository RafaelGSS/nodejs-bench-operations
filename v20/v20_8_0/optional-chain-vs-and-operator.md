## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|703,790,966|94|
|Using optional chain (obj.field?.field2) (undefined)|720,036,867|98|
|Using and operator (obj.field && obj.field.field2) (Valid)|718,210,086|97|
|Using and operator (obj.field && obj.field.field2) (undefined)|715,570,614|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:01:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":703790966.356369,"samples":8},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":720036867.3292019,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":718210085.8341721,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":715570614.4008657,"samples":7}]}-->
