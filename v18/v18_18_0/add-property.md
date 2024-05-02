## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|909,441,014|99|
|Using dot notation|907,908,874|96|
|Using define property (writable)|4,857,782|95|
|Using define property initialized (writable)|6,603,872|96|
|Using define property (getter)|2,441,785|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 02 2024 22:18:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":909441014.3302268,"samples":7},{"name":"Using dot notation","opsSec":907908873.7300582,"samples":7},{"name":"Using define property (writable)","opsSec":4857782.3600174375,"samples":5},{"name":"Using define property initialized (writable)","opsSec":6603871.749909826,"samples":6},{"name":"Using define property (getter)","opsSec":2441784.8353348416,"samples":5}]}-->
