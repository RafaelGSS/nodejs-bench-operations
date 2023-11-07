## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|848,338,115|99|
|Using dot notation|847,266,101|96|
|Using define property (writable)|4,278,073|95|
|Using define property initialized (writable)|6,061,101|98|
|Using define property (getter)|2,258,760|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 17:52:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Directly in the object","opsSec":848338114.6568011,"samples":6},{"name":"Using dot notation","opsSec":847266100.5851912,"samples":7},{"name":"Using define property (writable)","opsSec":4278073.154757511,"samples":7},{"name":"Using define property initialized (writable)","opsSec":6061101.166413099,"samples":7},{"name":"Using define property (getter)","opsSec":2258759.8135865703,"samples":5}]}-->
