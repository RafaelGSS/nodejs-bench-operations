## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|595,176,998|92|
|Using optional chain (obj.field?.field2) (undefined)|588,533,232|91|
|Using and operator (obj.field && obj.field.field2) (Valid)|597,078,816|99|
|Using and operator (obj.field && obj.field.field2) (undefined)|596,286,920|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:13:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":595176998.3437189,"samples":8},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":588533232.0853472,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":597078815.7559959,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":596286919.5660444,"samples":9}]}-->
