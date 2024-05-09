## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|17,007,958|8503980|
|Using dot notation|17,127,998|8564000|
|Using define property (writable)|3,133,038|1566520|
|Using define property initialized (writable)|3,844,016|1922009|
|Using define property (getter)|1,930,161|965081|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:21:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":17007958.55641526,"samples":8503980},{"name":"Using dot notation","opsSec":17127998.37471405,"samples":8564000},{"name":"Using define property (writable)","opsSec":3133038.3865349498,"samples":1566520},{"name":"Using define property initialized (writable)","opsSec":3844016.3759887177,"samples":1922009},{"name":"Using define property (getter)","opsSec":1930161.9475387426,"samples":965081}]}-->
