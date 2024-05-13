## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|16,149,488|8074745|
|Using dot notation|16,172,706|8086354|
|Using define property (writable)|3,479,490|1739746|
|Using define property initialized (writable)|4,564,687|2282344|
|Using define property (getter)|2,230,393|1115197|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 15:22:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":16149488.934109773,"samples":8074745},{"name":"Using dot notation","opsSec":16172706.609125284,"samples":8086354},{"name":"Using define property (writable)","opsSec":3479490.22545327,"samples":1739746},{"name":"Using define property initialized (writable)","opsSec":4564687.963484078,"samples":2282344},{"name":"Using define property (getter)","opsSec":2230393.955390881,"samples":1115197}]}-->
