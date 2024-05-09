## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|16,876,453|8438227|
|Using optional chain (obj.field?.field2) (undefined)|16,872,553|8436277|
|Using and operator (obj.field && obj.field.field2) (Valid)|16,124,713|8062357|
|Using and operator (obj.field && obj.field.field2) (undefined)|16,025,343|8012672|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:10:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":16876453.380356357,"samples":8438227},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":16872553.50922691,"samples":8436277},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":16124713.05426993,"samples":8062357},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":16025343.564435681,"samples":8012672}]}-->
