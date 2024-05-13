## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|16,186,825|8093413|
|Using optional chain (obj.field?.field2) (undefined)|16,141,276|8070639|
|Using and operator (obj.field && obj.field.field2) (Valid)|16,228,722|8114362|
|Using and operator (obj.field && obj.field.field2) (undefined)|16,076,198|8038100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 19:38:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":16186825.514390957,"samples":8093413},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":16141276.063069059,"samples":8070639},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":16228722.63680585,"samples":8114362},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":16076198.456665125,"samples":8038100}]}-->
