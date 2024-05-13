## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|16,110,659|8055330|
|Using optional chain (obj.field?.field2) (undefined)|16,038,159|8019080|
|Using and operator (obj.field && obj.field.field2) (Valid)|16,132,910|8066456|
|Using and operator (obj.field && obj.field.field2) (undefined)|16,037,576|8018789|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:07:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":16110659.967789013,"samples":8055330},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":16038159.615095854,"samples":8019080},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":16132910.677087437,"samples":8066456},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":16037576.58870877,"samples":8018789}]}-->
