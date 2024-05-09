## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|15,281,852|7640927|
|Using optional chain (obj.field?.field2) (undefined)|15,346,195|7673098|
|Using and operator (obj.field && obj.field.field2) (Valid)|15,360,543|7680272|
|Using and operator (obj.field && obj.field.field2) (undefined)|15,367,615|7683808|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:15:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":15281852.624632528,"samples":7640927},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":15346195.47821765,"samples":7673098},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":15360543.139789455,"samples":7680272},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":15367615.631151102,"samples":7683808}]}-->
