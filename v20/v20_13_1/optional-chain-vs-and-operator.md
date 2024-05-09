## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|19,915,677|9957839|
|Using optional chain (obj.field?.field2) (undefined)|19,970,257|9985129|
|Using and operator (obj.field && obj.field.field2) (Valid)|19,706,199|9853100|
|Using and operator (obj.field && obj.field.field2) (undefined)|18,557,016|9278509|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:13:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":19915677.561850265,"samples":9957839},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":19970257.92018313,"samples":9985129},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":19706199.64532664,"samples":9853100},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":18557016.812378474,"samples":9278509}]}-->
