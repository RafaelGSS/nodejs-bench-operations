## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|842,162,829|84|
|Using optional chain (obj.field?.field2) (undefined)|843,245,032|88|
|Using and operator (obj.field && obj.field.field2) (Valid)|839,935,017|87|
|Using and operator (obj.field && obj.field.field2) (undefined)|885,305,904|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:13:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":842162829.0699401,"samples":5},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":843245031.957072,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":839935017.3833706,"samples":8},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":885305903.9935138,"samples":5}]}-->
