## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|912,194,930|97|
|Using dot notation|909,618,119|96|
|Using define property (writable)|4,597,368|96|
|Using define property initialized (writable)|6,333,403|92|
|Using define property (getter)|2,568,937|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:13:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":912194930.0470653,"samples":6},{"name":"Using dot notation","opsSec":909618119.3453944,"samples":6},{"name":"Using define property (writable)","opsSec":4597367.817724662,"samples":6},{"name":"Using define property initialized (writable)","opsSec":6333403.29427827,"samples":5},{"name":"Using define property (getter)","opsSec":2568937.146117732,"samples":6}]}-->
