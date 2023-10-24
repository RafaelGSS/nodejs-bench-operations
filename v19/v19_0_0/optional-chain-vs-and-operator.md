## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|673,391,010|88|
|Using optional chain (obj.field?.field2) (undefined)|668,492,066|86|
|Using and operator (obj.field && obj.field.field2) (Valid)|672,496,765|89|
|Using and operator (obj.field && obj.field.field2) (undefined)|677,922,459|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:01:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":673391010.4619335,"samples":9},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":668492065.6324489,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":672496764.8207002,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":677922458.6350639,"samples":7}]}-->
