## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|14,329,440|7164721|
|Using optional chain (obj.field?.field2) (undefined)|14,046,834|7023418|
|Using and operator (obj.field && obj.field.field2) (Valid)|14,982,680|7491341|
|Using and operator (obj.field && obj.field.field2) (undefined)|14,894,045|7447024|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:38:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":14329440.452397022,"samples":7164721},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":14046834.539275376,"samples":7023418},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":14982680.801208202,"samples":7491341},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":14894045.94478861,"samples":7447024}]}-->
