## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|818,125,095|98|
|Using optional chain (obj.field?.field2) (undefined)|819,693,775|87|
|Using and operator (obj.field && obj.field.field2) (Valid)|822,836,159|96|
|Using and operator (obj.field && obj.field.field2) (undefined)|820,718,379|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:55:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":818125094.6486292,"samples":6},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":819693774.7827154,"samples":8},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":822836158.6445191,"samples":11},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":820718379.1694856,"samples":8}]}-->
