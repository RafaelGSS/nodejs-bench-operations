## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|822,987,511|99|
|Using optional chain (obj.field?.field2) (undefined)|824,043,221|100|
|Using and operator (obj.field && obj.field.field2) (Valid)|823,297,455|94|
|Using and operator (obj.field && obj.field.field2) (undefined)|823,457,755|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:55:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":822987511.1280771,"samples":6},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":824043221.2607731,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":823297455.4797908,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":823457754.9614247,"samples":6}]}-->
