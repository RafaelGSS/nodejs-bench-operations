## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|581,345,878|90|
|Using optional chain (obj.field?.field2) (undefined)|596,526,063|95|
|Using and operator (obj.field && obj.field.field2) (Valid)|597,607,054|96|
|Using and operator (obj.field && obj.field.field2) (undefined)|597,789,253|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:01:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":581345878.3114809,"samples":6},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":596526063.1968056,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":597607054.2267873,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":597789252.6926597,"samples":6}]}-->
