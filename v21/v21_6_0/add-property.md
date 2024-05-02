## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|910,876,356|95|
|Using dot notation|910,549,483|97|
|Using define property (writable)|4,611,185|95|
|Using define property initialized (writable)|6,851,296|95|
|Using define property (getter)|2,630,162|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 02 2024 22:22:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":910876355.8810974,"samples":7},{"name":"Using dot notation","opsSec":910549482.9774746,"samples":6},{"name":"Using define property (writable)","opsSec":4611185.494802512,"samples":6},{"name":"Using define property initialized (writable)","opsSec":6851295.847663347,"samples":5},{"name":"Using define property (getter)","opsSec":2630162.3982197656,"samples":4}]}-->
