## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|709,027,840|97|
|Using optional chain (obj.field?.field2) (undefined)|709,207,674|95|
|Using and operator (obj.field && obj.field.field2) (Valid)|709,949,208|98|
|Using and operator (obj.field && obj.field.field2) (undefined)|708,173,819|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:05:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":709027839.7148709,"samples":9},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":709207673.9851993,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":709949208.388079,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":708173819.297855,"samples":7}]}-->
