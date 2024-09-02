## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|14,755,957|7377979|
|Using optional chain (obj.field?.field2) (undefined)|14,898,760|7449381|
|Using and operator (obj.field && obj.field.field2) (Valid)|14,085,653|7042827|
|Using and operator (obj.field && obj.field.field2) (undefined)|15,425,580|7712791|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:35:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":14755957.565680249,"samples":7377979},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":14898760.856487982,"samples":7449381},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":14085653.62959204,"samples":7042827},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":15425580.187446408,"samples":7712791}]}-->
