## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|144,927,768|82|
|Using dot notation|147,218,272|85|
|Using define property (writable)|5,198,625|95|
|Using define property initialized (writable)|7,913,677|96|
|Using define property (getter)|2,819,505|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:22:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":144927768.27405336,"samples":5},{"name":"Using dot notation","opsSec":147218271.75846058,"samples":5},{"name":"Using define property (writable)","opsSec":5198625.005940904,"samples":6},{"name":"Using define property initialized (writable)","opsSec":7913676.657708174,"samples":5},{"name":"Using define property (getter)","opsSec":2819504.5574301598,"samples":4}]}-->
