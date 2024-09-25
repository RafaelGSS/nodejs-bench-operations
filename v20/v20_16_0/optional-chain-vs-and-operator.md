## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|19,192,831|9596416|
|Using optional chain (obj.field?.field2) (undefined)|19,023,732|9511867|
|Using and operator (obj.field && obj.field.field2) (Valid)|18,806,032|9403017|
|Using and operator (obj.field && obj.field.field2) (undefined)|18,581,893|9290947|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:13:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":19192831.34736922,"samples":9596416},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":19023732.36370447,"samples":9511867},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":18806032.38244203,"samples":9403017},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":18581893.702816688,"samples":9290947}]}-->
