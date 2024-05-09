## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|16,096,421|8048211|
|Using optional chain (obj.field?.field2) (undefined)|16,192,882|8096442|
|Using and operator (obj.field && obj.field.field2) (Valid)|16,207,585|8103793|
|Using and operator (obj.field && obj.field.field2) (undefined)|16,218,596|8109299|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:16:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":16096421.130809207,"samples":8048211},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":16192882.445473215,"samples":8096442},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":16207585.027573165,"samples":8103793},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":16218596.313320698,"samples":8109299}]}-->
