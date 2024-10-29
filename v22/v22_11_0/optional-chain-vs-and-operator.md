## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|148,757,558|74378819|
|Using optional chain (obj.field?.field2) (undefined)|98,110,006|49055376|
|Using and operator (obj.field && obj.field.field2) (Valid)|98,992,645|49496324|
|Using and operator (obj.field && obj.field.field2) (undefined)|98,771,417|49385795|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:25:48 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":148757558.8609787,"samples":74378819},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":98110006.75638866,"samples":49055376},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":98992645.6241765,"samples":49496324},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":98771417.94018994,"samples":49385795}]}-->
