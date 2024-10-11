## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|137,367,847|68692119|
|Using optional chain (obj.field?.field2) (undefined)|97,282,840|48649425|
|Using and operator (obj.field && obj.field.field2) (Valid)|96,347,772|48177985|
|Using and operator (obj.field && obj.field.field2) (undefined)|93,012,186|46514568|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:15:10 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":137367847.81786978,"samples":68692119},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":97282840.94112906,"samples":48649425},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":96347772.15345857,"samples":48177985},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":93012186.2032838,"samples":46514568}]}-->
