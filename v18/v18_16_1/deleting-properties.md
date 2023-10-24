## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,500,789|90|
|Using delete property (proto: null)|16,135,128|92|
|Using delete property (cached proto: null)|2,552,750|92|
|Using undefined assignment|916,156,790|88|
|Using undefined assignment (proto: null)|18,194,065|85|
|Using undefined property (cached proto: null)|782,137,763|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:18:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using delete property","opsSec":2500788.756250978,"samples":4},{"name":"Using delete property (proto: null)","opsSec":16135128.194430275,"samples":5},{"name":"Using delete property (cached proto: null)","opsSec":2552750.0239717816,"samples":5},{"name":"Using undefined assignment","opsSec":916156789.9946238,"samples":6},{"name":"Using undefined assignment (proto: null)","opsSec":18194065.19893527,"samples":5},{"name":"Using undefined property (cached proto: null)","opsSec":782137762.8785166,"samples":7}]}-->
