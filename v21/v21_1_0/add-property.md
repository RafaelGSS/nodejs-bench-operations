## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|912,469,783|98|
|Using dot notation|912,069,795|96|
|Using define property (writable)|4,753,912|97|
|Using define property initialized (writable)|6,856,884|95|
|Using define property (getter)|2,661,421|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 18:18:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":912469783.2943633,"samples":6},{"name":"Using dot notation","opsSec":912069795.1796272,"samples":6},{"name":"Using define property (writable)","opsSec":4753912.026638876,"samples":4},{"name":"Using define property initialized (writable)","opsSec":6856884.326699565,"samples":6},{"name":"Using define property (getter)","opsSec":2661420.8297384307,"samples":4}]}-->
