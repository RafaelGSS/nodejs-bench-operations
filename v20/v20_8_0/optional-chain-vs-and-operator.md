## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|718,580,635|88|
|Using optional chain (obj.field?.field2) (undefined)|699,388,468|84|
|Using and operator (obj.field && obj.field.field2) (Valid)|725,492,058|88|
|Using and operator (obj.field && obj.field.field2) (undefined)|717,074,408|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:05:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":718580635.1236346,"samples":6},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":699388467.6228687,"samples":8},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":725492057.5551934,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":717074407.9960955,"samples":6}]}-->
