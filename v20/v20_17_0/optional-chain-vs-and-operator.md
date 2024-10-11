## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|148,232,517|74129680|
|Using optional chain (obj.field?.field2) (undefined)|97,356,653|48683619|
|Using and operator (obj.field && obj.field.field2) (Valid)|99,335,593|49667801|
|Using and operator (obj.field && obj.field.field2) (undefined)|97,777,634|48891357|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:33:45 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":148232517.7592191,"samples":74129680},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":97356653.18995188,"samples":48683619},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":99335593.65581013,"samples":49667801},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":97777634.25634512,"samples":48891357}]}-->
