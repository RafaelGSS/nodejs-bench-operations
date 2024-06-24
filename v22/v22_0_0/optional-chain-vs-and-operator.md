## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|16,206,127|8103064|
|Using optional chain (obj.field?.field2) (undefined)|16,150,552|8075277|
|Using and operator (obj.field && obj.field.field2) (Valid)|16,238,753|8119377|
|Using and operator (obj.field && obj.field.field2) (undefined)|16,082,675|8041338|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:05:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":16206127.384174433,"samples":8103064},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":16150552.675667776,"samples":8075277},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":16238753.058181483,"samples":8119377},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":16082675.64618511,"samples":8041338}]}-->
