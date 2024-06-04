## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|16,029,000|8014501|
|Using optional chain (obj.field?.field2) (undefined)|16,111,045|8055523|
|Using and operator (obj.field && obj.field.field2) (Valid)|16,113,602|8056802|
|Using and operator (obj.field && obj.field.field2) (undefined)|16,120,374|8060188|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Tue Jun 04 2024 16:25:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245220184326172},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":16029000.813843086,"samples":8014501},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":16111045.80669801,"samples":8055523},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":16113602.453129107,"samples":8056802},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":16120374.130103644,"samples":8060188}]}-->
