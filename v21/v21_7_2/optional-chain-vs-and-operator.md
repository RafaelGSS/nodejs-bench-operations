## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|13,557,125|6778563|
|Using optional chain (obj.field?.field2) (undefined)|13,633,992|6816997|
|Using and operator (obj.field && obj.field.field2) (Valid)|13,707,496|6853749|
|Using and operator (obj.field && obj.field.field2) (undefined)|13,463,108|6731555|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:15:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":13557125.756004008,"samples":6778563},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":13633992.227709569,"samples":6816997},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":13707496.382592373,"samples":6853749},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":13463108.384395687,"samples":6731555}]}-->
