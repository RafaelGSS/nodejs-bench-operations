## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|145,795,415|73046212|
|Using optional chain (obj.field?.field2) (undefined)|97,364,319|48748319|
|Using and operator (obj.field && obj.field.field2) (Valid)|102,770,258|51385133|
|Using and operator (obj.field && obj.field.field2) (undefined)|102,045,992|51023076|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:24:22 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":145795415.70253825,"samples":73046212},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":97364319.11141303,"samples":48748319},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":102770258.18946037,"samples":51385133},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":102045992.4000679,"samples":51023076}]}-->
