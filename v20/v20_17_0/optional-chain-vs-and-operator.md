## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|132,068,000|66052899|
|Using optional chain (obj.field?.field2) (undefined)|95,144,399|47572241|
|Using and operator (obj.field && obj.field.field2) (Valid)|81,062,363|40531200|
|Using and operator (obj.field && obj.field.field2) (undefined)|96,267,707|48134554|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:21:25 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":132068000.93054168,"samples":66052899},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":95144399.9855272,"samples":47572241},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":81062363.35981175,"samples":40531200},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":96267707.11232612,"samples":48134554}]}-->
