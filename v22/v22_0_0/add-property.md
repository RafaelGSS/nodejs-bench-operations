## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|16,168,162|8084082|
|Using dot notation|16,145,867|8072934|
|Using define property (writable)|3,399,770|1699886|
|Using define property initialized (writable)|4,563,775|2281888|
|Using define property (getter)|2,238,837|1119419|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 18:32:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":16168162.577201469,"samples":8084082},{"name":"Using dot notation","opsSec":16145867.38648432,"samples":8072934},{"name":"Using define property (writable)","opsSec":3399770.0349327866,"samples":1699886},{"name":"Using define property initialized (writable)","opsSec":4563775.899594041,"samples":2281888},{"name":"Using define property (getter)","opsSec":2238837.5970136817,"samples":1119419}]}-->
