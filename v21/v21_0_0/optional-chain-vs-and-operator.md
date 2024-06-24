## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|16,526,314|8263158|
|Using optional chain (obj.field?.field2) (undefined)|16,595,668|8297835|
|Using and operator (obj.field && obj.field.field2) (Valid)|16,638,390|8319196|
|Using and operator (obj.field && obj.field.field2) (undefined)|16,657,852|8328927|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:04:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":16526314.119764416,"samples":8263158},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":16595668.488380043,"samples":8297835},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":16638390.602225086,"samples":8319196},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":16657852.897028428,"samples":8328927}]}-->
