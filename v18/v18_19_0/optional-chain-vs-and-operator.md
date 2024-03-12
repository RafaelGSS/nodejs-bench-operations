## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|821,594,358|97|
|Using optional chain (obj.field?.field2) (undefined)|822,243,443|95|
|Using and operator (obj.field && obj.field.field2) (Valid)|820,894,166|96|
|Using and operator (obj.field && obj.field.field2) (undefined)|820,517,833|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:55:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":821594358.3332707,"samples":6},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":822243443.1645736,"samples":8},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":820894166.4276938,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":820517832.5552204,"samples":7}]}-->
