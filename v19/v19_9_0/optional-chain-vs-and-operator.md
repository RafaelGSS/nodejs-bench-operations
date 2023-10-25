## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|583,358,064|94|
|Using optional chain (obj.field?.field2) (undefined)|591,205,347|94|
|Using and operator (obj.field && obj.field.field2) (Valid)|593,449,609|98|
|Using and operator (obj.field && obj.field.field2) (undefined)|592,483,223|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:13:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":583358064.0866516,"samples":7},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":591205346.7046717,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":593449608.6946353,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":592483222.8540349,"samples":6}]}-->
