## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|90,089,393|45060451|
|Using dot notation|68,577,012|34294399|
|Using define property (writable)|4,412,085|2206462|
|Using define property initialized (writable)|6,045,521|3023066|
|Using define property (getter)|2,189,460|1094761|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:58:51 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Directly in the object","opsSec":90089393.05460037,"samples":45060451},{"name":"Using dot notation","opsSec":68577012.35465673,"samples":34294399},{"name":"Using define property (writable)","opsSec":4412085.015561781,"samples":2206462},{"name":"Using define property initialized (writable)","opsSec":6045521.885931272,"samples":3023066},{"name":"Using define property (getter)","opsSec":2189460.9403132964,"samples":1094761}]}-->
