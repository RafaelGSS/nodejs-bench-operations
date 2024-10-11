## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|138,886,192|69520399|
|Using optional chain (obj.field?.field2) (undefined)|96,778,294|48437348|
|Using and operator (obj.field && obj.field.field2) (Valid)|97,483,998|48742896|
|Using and operator (obj.field && obj.field.field2) (undefined)|97,395,365|48700043|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:33:26 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":138886192.6680458,"samples":69520399},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":96778294.17339094,"samples":48437348},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":97483998.87932462,"samples":48742896},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":97395365.0518652,"samples":48700043}]}-->
