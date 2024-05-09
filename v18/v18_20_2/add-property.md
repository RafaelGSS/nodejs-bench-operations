## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|17,040,491|8520246|
|Using dot notation|17,108,977|8554489|
|Using define property (writable)|3,298,720|1649361|
|Using define property initialized (writable)|4,137,830|2068927|
|Using define property (getter)|2,026,725|1013363|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:23:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":17040491.5693464,"samples":8520246},{"name":"Using dot notation","opsSec":17108977.836836074,"samples":8554489},{"name":"Using define property (writable)","opsSec":3298720.557602524,"samples":1649361},{"name":"Using define property initialized (writable)","opsSec":4137830.71183782,"samples":2068927},{"name":"Using define property (getter)","opsSec":2026725.807682783,"samples":1013363}]}-->
