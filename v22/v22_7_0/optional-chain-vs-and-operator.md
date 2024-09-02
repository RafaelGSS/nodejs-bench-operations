## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|14,479,075|7239538|
|Using optional chain (obj.field?.field2) (undefined)|15,363,865|7681933|
|Using and operator (obj.field && obj.field.field2) (Valid)|15,128,653|7564327|
|Using and operator (obj.field && obj.field.field2) (undefined)|14,195,970|7097986|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:39:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":14479075.507776529,"samples":7239538},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":15363865.416147094,"samples":7681933},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":15128653.334459009,"samples":7564327},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":14195970.2681212,"samples":7097986}]}-->
