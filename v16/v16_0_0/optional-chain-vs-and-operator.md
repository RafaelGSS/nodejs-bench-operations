## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|563,487,561|90|
|Using optional chain (obj.field?.field2) (undefined)|585,394,589|88|
|Using and operator (obj.field && obj.field.field2) (Valid)|590,004,263|94|
|Using and operator (obj.field && obj.field.field2) (undefined)|586,573,918|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:01:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":563487560.7074554,"samples":6},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":585394588.570228,"samples":8},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":590004263.4474694,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":586573917.5671669,"samples":7}]}-->
