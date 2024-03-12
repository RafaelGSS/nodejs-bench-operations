## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,276,023|95|
|Using replaceAll()|2,949,450|95|
|Using replaceAll(//g)|3,022,837|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:10:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Using replace(//g)","opsSec":3276022.912993343,"samples":4},{"name":"Using replaceAll()","opsSec":2949449.9506338956,"samples":5},{"name":"Using replaceAll(//g)","opsSec":3022837.3565603136,"samples":5}]}-->
