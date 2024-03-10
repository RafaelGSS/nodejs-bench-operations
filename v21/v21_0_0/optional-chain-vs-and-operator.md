## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|821,647,087|95|
|Using optional chain (obj.field?.field2) (undefined)|822,333,457|96|
|Using and operator (obj.field && obj.field.field2) (Valid)|822,900,255|97|
|Using and operator (obj.field && obj.field.field2) (undefined)|823,590,778|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:59:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":821647086.7683747,"samples":8},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":822333456.8051999,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":822900254.6798103,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":823590778.3120296,"samples":7}]}-->
