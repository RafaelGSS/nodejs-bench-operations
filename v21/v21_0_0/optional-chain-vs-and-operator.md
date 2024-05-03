## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|910,244,434|96|
|Using optional chain (obj.field?.field2) (undefined)|911,045,584|99|
|Using and operator (obj.field && obj.field.field2) (Valid)|911,610,035|98|
|Using and operator (obj.field && obj.field.field2) (undefined)|911,123,952|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:58:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":910244434.1041954,"samples":6},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":911045584.2475812,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":911610034.5345951,"samples":8},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":911123952.3618616,"samples":6}]}-->
