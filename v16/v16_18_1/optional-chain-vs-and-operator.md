## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|847,990,604|100|
|Using optional chain (obj.field?.field2) (undefined)|848,167,892|94|
|Using and operator (obj.field && obj.field.field2) (Valid)|850,189,931|97|
|Using and operator (obj.field && obj.field.field2) (undefined)|848,998,567|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:56:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":847990603.9542552,"samples":10},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":848167892.3630656,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":850189930.5702424,"samples":10},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":848998567.0442418,"samples":7}]}-->
