## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|819,985,196|99|
|Using optional chain (obj.field?.field2) (undefined)|822,260,700|97|
|Using and operator (obj.field && obj.field.field2) (Valid)|821,573,275|95|
|Using and operator (obj.field && obj.field.field2) (undefined)|821,560,012|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:55:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":819985196.2660252,"samples":6},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":822260700.1756568,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":821573274.9843723,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":821560012.3557776,"samples":6}]}-->
