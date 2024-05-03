## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|912,217,657|100|
|Using dot notation|909,790,954|95|
|Using define property (writable)|4,992,943|98|
|Using define property initialized (writable)|6,442,186|94|
|Using define property (getter)|2,610,236|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:14:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":912217656.66744,"samples":6},{"name":"Using dot notation","opsSec":909790953.5908649,"samples":7},{"name":"Using define property (writable)","opsSec":4992942.853746876,"samples":7},{"name":"Using define property initialized (writable)","opsSec":6442186.268837996,"samples":7},{"name":"Using define property (getter)","opsSec":2610235.904254199,"samples":6}]}-->
