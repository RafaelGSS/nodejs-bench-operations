## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|16,114,427|8057214|
|Using optional chain (obj.field?.field2) (undefined)|16,119,481|8059741|
|Using and operator (obj.field && obj.field.field2) (Valid)|16,130,196|8065099|
|Using and operator (obj.field && obj.field.field2) (undefined)|16,161,068|8080535|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:17:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":16114427.935555758,"samples":8057214},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":16119481.161766494,"samples":8059741},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":16130196.161199968,"samples":8065099},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":16161068.707117947,"samples":8080535}]}-->
