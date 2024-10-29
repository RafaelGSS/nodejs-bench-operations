## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|144,790,472|72395257|
|Using optional chain (obj.field?.field2) (undefined)|98,635,833|49351409|
|Using and operator (obj.field && obj.field.field2) (Valid)|102,522,932|51262001|
|Using and operator (obj.field && obj.field.field2) (undefined)|101,554,652|51219617|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:25:07 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":144790472.8795057,"samples":72395257},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":98635833.22202891,"samples":49351409},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":102522932.89085582,"samples":51262001},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":101554652.35611728,"samples":51219617}]}-->
