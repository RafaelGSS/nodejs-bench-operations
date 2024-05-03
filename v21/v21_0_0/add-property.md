## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|912,220,432|95|
|Using dot notation|911,296,597|92|
|Using define property (writable)|4,731,970|94|
|Using define property initialized (writable)|6,968,218|95|
|Using define property (getter)|2,686,781|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:18:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":912220431.6895503,"samples":6},{"name":"Using dot notation","opsSec":911296597.4438951,"samples":6},{"name":"Using define property (writable)","opsSec":4731970.344156935,"samples":4},{"name":"Using define property initialized (writable)","opsSec":6968217.542094901,"samples":6},{"name":"Using define property (getter)","opsSec":2686780.771833919,"samples":5}]}-->
