## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|844,841,942|94|
|Using optional chain (obj.field?.field2) (undefined)|848,490,874|96|
|Using and operator (obj.field && obj.field.field2) (Valid)|848,270,459|100|
|Using and operator (obj.field && obj.field.field2) (undefined)|846,241,176|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:55:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":844841941.7545221,"samples":7},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":848490873.5921545,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":848270458.7832884,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":846241175.7610834,"samples":7}]}-->
