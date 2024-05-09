## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|17,074,244|8537123|
|Using optional chain (obj.field?.field2) (undefined)|16,979,253|8489627|
|Using and operator (obj.field && obj.field.field2) (Valid)|17,014,893|8507447|
|Using and operator (obj.field && obj.field.field2) (undefined)|17,053,868|8526935|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:11:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":17074244.80317975,"samples":8537123},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":16979253.878554914,"samples":8489627},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":17014893.261686664,"samples":8507447},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":17053868.389880206,"samples":8526935}]}-->
