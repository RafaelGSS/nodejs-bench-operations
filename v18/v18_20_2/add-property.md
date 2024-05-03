## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|911,714,204|100|
|Using dot notation|909,496,022|95|
|Using define property (writable)|4,494,770|95|
|Using define property initialized (writable)|6,305,786|96|
|Using define property (getter)|2,591,783|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:15:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":911714204.1435252,"samples":8},{"name":"Using dot notation","opsSec":909496022.3682208,"samples":6},{"name":"Using define property (writable)","opsSec":4494770.131145988,"samples":8},{"name":"Using define property initialized (writable)","opsSec":6305785.538697922,"samples":5},{"name":"Using define property (getter)","opsSec":2591782.76034946,"samples":5}]}-->
