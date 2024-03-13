## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|844,842,504|98|
|Using dot notation|842,235,008|92|
|Using define property (writable)|4,198,907|95|
|Using define property initialized (writable)|6,394,467|97|
|Using define property (getter)|2,518,204|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Wed Mar 13 2024 15:38:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Directly in the object","opsSec":844842503.5279866,"samples":6},{"name":"Using dot notation","opsSec":842235008.3317577,"samples":6},{"name":"Using define property (writable)","opsSec":4198907.078119428,"samples":4},{"name":"Using define property initialized (writable)","opsSec":6394466.714124829,"samples":5},{"name":"Using define property (getter)","opsSec":2518204.237919781,"samples":4}]}-->
