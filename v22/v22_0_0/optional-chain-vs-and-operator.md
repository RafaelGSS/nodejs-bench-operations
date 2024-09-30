## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|136,401,340|68200722|
|Using optional chain (obj.field?.field2) (undefined)|98,483,660|49438415|
|Using and operator (obj.field && obj.field.field2) (Valid)|95,739,316|48235369|
|Using and operator (obj.field && obj.field.field2) (undefined)|97,799,042|48900753|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:25:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":136401340.06217888,"samples":68200722},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":98483660.3795556,"samples":49438415},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":95739316.23946044,"samples":48235369},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":97799042.8333072,"samples":48900753}]}-->
