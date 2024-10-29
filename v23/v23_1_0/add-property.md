## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|89,867,993|44940659|
|Using dot notation|65,846,781|32926346|
|Using define property (writable)|4,737,823|2369075|
|Using define property initialized (writable)|7,038,125|3519082|
|Using define property (getter)|2,460,384|1230267|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 16:46:51 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.1.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Directly in the object","opsSec":89867993.09292814,"samples":44940659},{"name":"Using dot notation","opsSec":65846781.197838984,"samples":32926346},{"name":"Using define property (writable)","opsSec":4737823.611331415,"samples":2369075},{"name":"Using define property initialized (writable)","opsSec":7038125.726672297,"samples":3519082},{"name":"Using define property (getter)","opsSec":2460384.270854813,"samples":1230267}]}-->
