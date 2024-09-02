## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|16,180,007|8090004|
|Using optional chain (obj.field?.field2) (undefined)|18,542,346|9271174|
|Using and operator (obj.field && obj.field.field2) (Valid)|18,491,232|9245619|
|Using and operator (obj.field && obj.field.field2) (undefined)|18,249,428|9124715|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:29:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":16180007.090868803,"samples":8090004},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":18542346.89965983,"samples":9271174},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":18491232.703209564,"samples":9245619},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":18249428.82308771,"samples":9124715}]}-->
