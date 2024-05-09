## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|15,047,655|7523828|
|Using optional chain (obj.field?.field2) (undefined)|15,178,391|7589196|
|Using and operator (obj.field && obj.field.field2) (Valid)|15,103,023|7551512|
|Using and operator (obj.field && obj.field.field2) (undefined)|15,204,569|7602285|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:14:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":15047655.368016765,"samples":7523828},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":15178391.939310761,"samples":7589196},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":15103023.848996412,"samples":7551512},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":15204569.543895671,"samples":7602285}]}-->
