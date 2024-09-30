## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|95,517,307|47761575|
|Using dot notation|71,858,198|35929114|
|Using define property (writable)|4,724,913|2362504|
|Using define property initialized (writable)|6,958,724|3479470|
|Using define property (getter)|2,401,136|1200576|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 20:59:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Directly in the object","opsSec":95517307.58836405,"samples":47761575},{"name":"Using dot notation","opsSec":71858198.10698959,"samples":35929114},{"name":"Using define property (writable)","opsSec":4724913.993111193,"samples":2362504},{"name":"Using define property initialized (writable)","opsSec":6958724.919730181,"samples":3479470},{"name":"Using define property (getter)","opsSec":2401136.723968162,"samples":1200576}]}-->
