## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|140,916,238|70464688|
|Using optional chain (obj.field?.field2) (undefined)|98,749,808|49423384|
|Using and operator (obj.field && obj.field.field2) (Valid)|95,888,461|47948051|
|Using and operator (obj.field && obj.field.field2) (undefined)|97,317,396|48659439|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:25:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":140916238.94270834,"samples":70464688},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":98749808.92011483,"samples":49423384},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":95888461.0320942,"samples":47948051},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":97317396.82922025,"samples":48659439}]}-->
