## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|709,741,320|94|
|Using optional chain (obj.field?.field2) (undefined)|708,298,777|98|
|Using and operator (obj.field && obj.field.field2) (Valid)|709,642,740|95|
|Using and operator (obj.field && obj.field.field2) (undefined)|708,965,724|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:05:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":709741319.9193391,"samples":7},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":708298776.8257365,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":709642740.203177,"samples":9},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":708965723.7828028,"samples":9}]}-->
