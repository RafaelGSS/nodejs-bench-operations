## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,314,726|95|
|Using replaceAll()|2,737,766|94|
|Using replaceAll(//g)|2,960,462|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:10:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Using replace(//g)","opsSec":3314725.9291471206,"samples":9},{"name":"Using replaceAll()","opsSec":2737765.5385621316,"samples":6},{"name":"Using replaceAll(//g)","opsSec":2960461.982306028,"samples":5}]}-->
