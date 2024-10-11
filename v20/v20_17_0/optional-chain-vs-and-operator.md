## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|134,703,063|67351554|
|Using optional chain (obj.field?.field2) (undefined)|95,111,443|47558540|
|Using and operator (obj.field && obj.field.field2) (Valid)|97,335,284|48667736|
|Using and operator (obj.field && obj.field.field2) (undefined)|96,127,870|48071092|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:14:30 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":134703063.278583,"samples":67351554},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":95111443.12521173,"samples":47558540},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":97335284.72691219,"samples":48667736},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":96127870.75230072,"samples":48071092}]}-->
