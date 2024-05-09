## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|14,708,662|7354332|
|Using Object.getOwnPropertyNames()|14,972,950|7486476|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:47:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using Object.keys()","opsSec":14708662.681436261,"samples":7354332},{"name":"Using Object.getOwnPropertyNames()","opsSec":14972950.914771779,"samples":7486476}]}-->
